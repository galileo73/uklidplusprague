import { useState } from 'react';
import { businessInfo } from '../../config';
import logoImage from '../../assets/branding/uklidplus-logo.jpg';

interface LogoProps {
  variant?: 'full' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

/**
 * Logo component with fallback.
 * Important:
 * - Do NOT add h-auto to non-hero logo sizes, otherwise mobile header logo becomes too large.
 * - Header logo must remain compact.
 */
export function Logo({ variant = 'full', size = 'md', className = '' }: LogoProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const sizeClasses = {
    sm: 'h-6 md:h-7',       // compact mobile/tablet header logo
    md: 'h-10',
    lg: 'h-12',
    hero: 'w-56 lg:w-72 xl:w-80 h-auto',
  };

  const iconSizes = {
    sm: 'w-4 h-4 md:w-5 md:h-5 text-[10px]',
    md: 'w-10 h-10 text-lg',
    lg: 'w-12 h-12 text-xl',
    hero: 'w-20 h-20 text-3xl',
  };

  const heroSize = size === 'hero';
  const imageSizeClass = sizeClasses[size];

  if (imageError) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div
          className={`${iconSizes[size]} bg-accent-primary rounded-md flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-dark-primary font-bold">U+</span>
        </div>

        {variant === 'full' && !heroSize && (
          <span className="text-xs md:text-sm font-bold text-text-primary whitespace-nowrap leading-none">
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
        className={`${imageSizeClass} object-contain flex-shrink-0 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
      />

      {variant === 'full' && !heroSize && (
        <span className="text-xs md:text-sm font-bold text-text-primary whitespace-nowrap leading-none">
          {businessInfo.name}
        </span>
      )}
    </div>
  );
}

export default Logo;