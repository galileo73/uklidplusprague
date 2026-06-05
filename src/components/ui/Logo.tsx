import { useState } from 'react';
import { businessInfo } from '../../config';
import logoImage from '../../assets/branding/uklidplus-logo.jpg';

interface LogoProps {
  variant?: 'full' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

/**
 * Logo component with fallback
 * Uses the official UKLID PLUS PRAHA logo from src/assets/branding/uklidplus-logo.jpg
 * Falls back to text-based logo if image fails to load
 */
export function Logo({ variant = 'full', size = 'md', className = '' }: LogoProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Size classes for the logo image
  // sm: compact for mobile header (24-28px), md: default, lg: large, hero: responsive for hero
  const sizeClasses = {
    sm: 'h-6 md:h-7',  // 24px mobile, 28px tablet - compact for header
    md: 'h-12',        // 48px - default
    lg: 'h-14',        // 56px
    hero: 'w-48 md:w-56 lg:w-72 xl:w-80', // Responsive: 192px mobile, 224px tablet, 288px desktop, 320px xl
  };

  // Fallback icon sizes
  const iconSizes = {
    sm: 'w-6 h-6 md:w-7 md:h-7 text-xs',
    md: 'w-12 h-12 text-xl',
    lg: 'w-14 h-14 text-2xl',
    hero: 'w-20 h-20 text-3xl',
  };

  // Hero size uses width-based sizing for larger display
  const heroSize = size === 'hero';
  const imageSizeClass = heroSize ? sizeClasses.hero : sizeClasses[size];

  // Fallback text-based logo
  if (imageError) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className={`${iconSizes[size]} bg-accent-primary rounded-lg flex items-center justify-center flex-shrink-0`}>
          <span className="text-dark-primary font-bold">U+</span>
        </div>
        {variant === 'full' && !heroSize && (
          <span className="text-sm md:text-base font-bold text-text-primary whitespace-nowrap">
            {businessInfo.name}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoImage}
        alt="UKLID PLUS PRAHA"
        className={`${imageSizeClass} ${heroSize ? 'h-auto max-w-full' : 'h-auto'} object-contain flex-shrink-0 ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
      />
      {variant === 'full' && !heroSize && (
        <span className="text-sm md:text-base font-bold text-text-primary whitespace-nowrap">
          {businessInfo.name}
        </span>
      )}
    </div>
  );
}

export default Logo;