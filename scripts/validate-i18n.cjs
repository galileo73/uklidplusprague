#!/usr/bin/env node
/**
 * i18n Validation Script
 * Validates that all translation keys are present in all locale files
 *
 * Usage: node scripts/validate-i18n.cjs
 */

const fs = require('fs');
const path = require('path');

// Locale files to validate
const LOCALES = ['en', 'cz', 'ru', 'ua'];
const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');

/**
 * Extract all keys from a locale file by reading key patterns
 */
function extractKeysFromLocale(content) {
  const keys = [];
  const stack = []; // Track nested object paths
  let inObject = false;
  let braceDepth = 0;

  // Split into lines and process
  const lines = content.split('\n');

  for (const line of lines) {
    // Skip comments
    if (line.trim().startsWith('//')) continue;

    // Track brace depth
    const openBraces = (line.match(/{/g) || []).length;
    const closeBraces = (line.match(/}/g) || []).length;

    // Find key assignments: key: value or 'key': value or "key": value
    const keyMatch = line.match(/^\s*(?:['"])?([a-zA-Z0-9_-]+)(?:['"])?\s*:\s*(?![=])/);
    if (keyMatch) {
      const key = keyMatch[1];
      const currentPath = [...stack, key].join('.');

      // Check if value is an object or primitive
      const afterColon = line.slice(line.indexOf(':') + 1).trim();
      const isObject = afterColon.startsWith('{');

      if (!isObject) {
        // It's a leaf key (primitive value or array)
        keys.push(currentPath);
      } else {
        // It's a nested object - push to stack when we see the opening brace
        // Will be popped when we see closing brace
      }
    }

    // Handle nested objects by tracking brace depth
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '{') {
        braceDepth++;
        // Find the key for this object
        const beforeBrace = line.slice(0, i).trim();
        const keyMatch = beforeBrace.match(/([a-zA-Z0-9_-]+)\s*:\s*$/);
        if (keyMatch) {
          stack.push(keyMatch[1]);
        }
      } else if (line[i] === '}') {
        braceDepth--;
        if (stack.length > 0 && braceDepth < countBraces(stack.length)) {
          stack.pop();
        }
      }
    }
  }

  // Alternative simpler approach: extract all key paths from the structure
  return extractKeysSimpler(content);
}

/**
 * Count expected braces at a given depth
 */
function countBraces(depth) {
  // This is a helper, may not be needed
  return depth + 1;
}

/**
 * Simpler key extraction using regex patterns
 */
function extractKeysSimpler(content) {
  const keys = [];

  // First, find all leaf key patterns: key: 'value', key: "value", key: `value`
  // Or key: number, key: boolean
  const leafPattern = /^\s*['"]?([a-zA-Z0-9_-]+)['"]?\s*:\s*['"`]|^\s*['"]?([a-zA-Z0-9_-]+)['"]?\s*:\s*(?:true|false|\d)/gm;

  // Extract the full object content
  const exportMatch = content.match(/export default\s*\{([\s\S]*)\};?\s*$/);
  if (!exportMatch) {
    return [];
  }

  const objContent = exportMatch[1];

  // Parse line by line, tracking object depth
  const lines = objContent.split('\n');
  const pathStack = [];
  let depth = 0;

  for (const line of lines) {
    const trimmed = line.trim();

    // Skip comments
    if (trimmed.startsWith('//')) continue;
    if (!trimmed) continue;

    // Count braces in this line
    const opens = (trimmed.match(/{/g) || []).length;
    const closes = (trimmed.match(/}/g) || []).length;

    // Find key before opening brace (nested object)
    const nestedKeyMatch = trimmed.match(/^['"]?([a-zA-Z0-9_-]+)['"]?\s*:\s*\{/);
    if (nestedKeyMatch) {
      pathStack.push(nestedKeyMatch[1]);
    }

    // Find leaf key (has a value, not another object)
    const leafKeyMatch = trimmed.match(/^['"]?([a-zA-Z0-9_-]+)['"]?\s*:\s*(?!{)(.+)/);
    if (leafKeyMatch && depth === pathStack.length) {
      const key = leafKeyMatch[1];
      const fullKey = [...pathStack, key].join('.');
      keys.push(fullKey);
    }

    // Update depth based on net braces
    for (let i = 0; i < opens; i++) {
      depth++;
    }
    for (let i = 0; i < closes; i++) {
      depth--;
      // Pop from stack when closing an object
      if (pathStack.length > depth) {
        pathStack.pop();
      }
    }
  }

  return keys;
}

/**
 * Parse a locale file and extract keys using regex
 */
function parseLocaleFile(locale) {
  const filePath = path.join(LOCALES_DIR, `${locale}.ts`);

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Locale file not found: ${filePath}`);
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract all key paths using a more robust regex approach
  const keys = [];

  // Match all key: value patterns, tracking nesting
  const exportMatch = content.match(/export default\s*\{([\s\S]*)\};?\s*$/);
  if (!exportMatch) {
    console.error(`❌ Could not parse export default in ${locale}.ts`);
    process.exit(1);
  }

  const objContent = exportMatch[1];
  const lines = objContent.split('\n');

  const pathStack = [];
  let lastKeyAtDepth = {};
  let currentDepth = 0;

  for (const line of lines) {
    const trimmed = line.trim();

    // Skip comments and empty lines
    if (trimmed.startsWith('//') || !trimmed) continue;

    // Count opening and closing braces
    const openBraces = (trimmed.match(/{/g) || []).length;
    const closeBraces = (trimmed.match(/}/g) || []).length;
    const hasComma = trimmed.endsWith(',');

    // Check for key: { pattern (nested object start)
    const nestedMatch = trimmed.match(/^['"]?([a-zA-Z0-9_-]+)['"]?\s*:\s*\{/);
    if (nestedMatch) {
      pathStack.push(nestedMatch[1]);
      currentDepth = pathStack.length;
      continue;
    }

    // Check for key: value pattern (leaf)
    const leafMatch = trimmed.match(/^['"]?([a-zA-Z0-9_-]+)['"]?\s*:\s*(?!{)(.+)/);
    if (leafMatch) {
      const key = leafMatch[1];
      const fullKey = [...pathStack, key].join('.');
      keys.push(fullKey);
      continue;
    }

    // Handle closing braces
    for (let i = 0; i < closeBraces; i++) {
      if (pathStack.length > 0) {
        pathStack.pop();
        currentDepth = pathStack.length;
      }
    }
  }

  return keys;
}

/**
 * Main validation
 */
function validate() {
  console.log('🔍 i18n Key Validation\n');
  console.log('='.repeat(50));

  const allLocaleKeys = {};
  let hasErrors = false;

  // Load all locale files
  for (const locale of LOCALES) {
    console.log(`\n📁 Loading ${locale}.ts...`);
    const keys = parseLocaleFile(locale);
    allLocaleKeys[locale] = new Set(keys);
    console.log(`   Found ${keys.length} keys`);
  }

  console.log('\n' + '='.repeat(50));
  console.log('\n🔍 Cross-locale validation:\n');

  // Use English as the reference
  const referenceKeys = allLocaleKeys['en'];

  // Check each locale against English
  for (const locale of LOCALES) {
    if (locale === 'en') continue;

    const localeKeys = allLocaleKeys[locale];
    const missing = [];
    const extra = [];

    // Find missing keys
    for (const key of referenceKeys) {
      if (!localeKeys.has(key)) {
        missing.push(key);
      }
    }

    // Find extra keys
    for (const key of localeKeys) {
      if (!referenceKeys.has(key)) {
        extra.push(key);
      }
    }

    if (missing.length > 0) {
      console.error(`❌ ${locale}: Missing ${missing.length} keys:`);
      missing.slice(0, 10).forEach(k => console.error(`   - ${k}`));
      if (missing.length > 10) {
        console.error(`   ... and ${missing.length - 10} more`);
      }
      hasErrors = true;
    }

    if (extra.length > 0) {
      console.warn(`⚠️  ${locale}: Extra ${extra.length} keys (not in en):`);
      extra.slice(0, 5).forEach(k => console.warn(`   - ${k}`));
      if (extra.length > 5) {
        console.warn(`   ... and ${extra.length - 5} more`);
      }
    }

    if (missing.length === 0 && extra.length === 0) {
      console.log(`✅ ${locale}: All keys match English`);
    }
  }

  // Check for raw key patterns in values
  console.log('\n' + '='.repeat(50));
  console.log('\n🔍 Raw key pattern check:\n');

  const rawKeyPatterns = [
    /HERO\.SCROLL/i,
    /hero\.scroll/i,
    /[A-Z]+\.[A-Z]+\.[A-Z]+/,  // Patterns like SECTION.SUBSECTION.KEY
  ];

  for (const locale of LOCALES) {
    const filePath = path.join(LOCALES_DIR, `${locale}.ts`);
    const content = fs.readFileSync(filePath, 'utf-8');

    for (const pattern of rawKeyPatterns) {
      const matches = content.match(pattern);
      if (matches) {
        // Check if it's in a value position (after a colon and quote)
        const lines = content.split('\n');
        for (const line of lines) {
          if (pattern.test(line) && line.includes(':')) {
            const afterColon = line.slice(line.indexOf(':') + 1).trim();
            // If the pattern appears inside a string value, that's a bug
            if ((afterColon.startsWith("'") || afterColon.startsWith('"')) && pattern.test(afterColon)) {
              console.error(`❌ ${locale}: Raw key pattern found in value: ${matches[0]}`);
              console.error(`   Line: ${line.trim()}`);
              hasErrors = true;
            }
          }
        }
      }
    }
  }

  // Verify critical keys exist
  console.log('\n🔍 Critical key existence check:\n');
  const criticalKeys = ['hero.scroll', 'nav.home', 'nav.privacy', 'nav.terms'];

  for (const key of criticalKeys) {
    let foundInAll = true;
    for (const locale of LOCALES) {
      if (!allLocaleKeys[locale].has(key)) {
        console.error(`❌ ${locale}: Missing critical key: ${key}`);
        foundInAll = false;
        hasErrors = true;
      }
    }
    if (foundInAll) {
      console.log(`✅ ${key}: Found in all locales`);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('\n📊 Summary:\n');

  for (const locale of LOCALES) {
    console.log(`   ${locale}: ${allLocaleKeys[locale].size} keys`);
  }

  if (hasErrors) {
    console.log('\n❌ Validation FAILED - Issues detected\n');
    process.exit(1);
  } else {
    console.log('\n✅ Validation PASSED - All locales have matching keys\n');
    process.exit(0);
  }
}

// Run validation
validate();