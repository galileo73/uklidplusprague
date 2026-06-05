import { useState } from 'react';
import { businessInfo } from '../../config';

interface LogoProps {
  variant?: 'full' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Logo component with fallback
 * Uses the official UKLID PLUS PRAHA logo from /logo.jpg
 * Falls back to text-based logo if image fails to load
 */
export function Logo({ variant = 'full', size = 'md', className = '' }: LogoProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Size classes for the logo image - larger for better visibility
  const sizeClasses = {
    sm: 'h-9',   // 36px
    md: 'h-12',  // 48px - increased from 40px
    lg: 'h-14',  // 56px
  };

  // Fallback icon sizes
  const iconSizes = {
    sm: 'w-9 h-9 text-sm',
    md: 'w-12 h-12 text-xl',
    lg: 'w-14 h-14 text-2xl',
  };

  // Fallback text-based logo
  if (imageError) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className={`${iconSizes[size]} bg-accent-primary rounded-lg flex items-center justify-center flex-shrink-0`}>
          <span className="text-dark-primary font-bold">U+</span>
        </div>
        {variant === 'full' && (
          <span className="text-lg md:text-xl font-bold text-text-primary whitespace-nowrap">
            {businessInfo.name}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.jpg"
        alt="UKLID PLUS PRAHA"
        className={`${sizeClasses[size]} w-auto object-contain flex-shrink-0 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
      />
      {variant === 'full' && (
        <span className="text-lg md:text-xl font-bold text-text-primary whitespace-nowrap">
          {businessInfo.name}
        </span>
      )}
    </div>
  );
}

export default Logo;