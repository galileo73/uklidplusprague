import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavItems, whatsappLink } from '../../config';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { useLanguage } from '../../i18n/LanguageContext';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
}

export function Header({ onMenuToggle, isMenuOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { currentLanguage, setLanguage, languageOptions } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-secondary/95 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="container-custom flex items-center justify-between h-16 md:h-20"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Mobile Logo (visible on mobile/tablet only) */}
        <a
          href="/"
          className="flex items-center gap-4 group lg:hidden flex-1 justify-center"
          aria-label="UKLID PLUS PRAHA - Home"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2"
          >
            <Logo variant="full" size="sm" className="[&_img]:!h-11 [&_img]:md:!h-12 [&_img]:!w-auto [&_span]:!text-base [&_span]:md:!text-lg font-bold"/>
          </motion.div>
        </a>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center gap-8">
            {mainNavItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-text-secondary hover:text-accent-primary transition-colors duration-200 font-medium"
              >
                {t(`nav.${item.id}`)}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Language Selector - Desktop */}
          <div className="hidden md:block md:relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1.5 px-2 py-1.5 text-text-secondary hover:text-text-primary transition-colors"
              aria-expanded={isLangDropdownOpen}
              aria-haspopup="listbox"
              aria-label="Select language"
            >
              <span className="text-sm font-semibold">
                {languageOptions.find((l) => l.code === currentLanguage)?.label}
              </span>
              <svg
                className={`w-3.5 h-3.5 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 bg-dark-secondary border border-white/10 rounded-lg shadow-lg overflow-hidden"
                  role="listbox"
                  aria-label="Language options"
                >
                  <div className="flex">
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                          currentLanguage === lang.code
                            ? 'bg-accent-primary/10 text-accent-primary'
                            : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                        }`}
                        role="option"
                        aria-selected={currentLanguage === lang.code}
                        aria-label={lang.name}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* WhatsApp CTA - Desktop */}
          <div className="hidden md:block">
            <Button href={whatsappLink} variant="whatsapp" size="sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t('nav.bookNow')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 text-text-primary hover:text-accent-primary transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;