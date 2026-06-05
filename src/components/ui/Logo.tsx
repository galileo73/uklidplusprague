import { useState } from 'react';
import { businessInfo } from '../../config';

interface LogoProps {
  variant?: 'full' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Logo component with fallback
 * Uses the official UKLID PLUS PRAHA logo from /public/logo.jpg
 * Falls back to text-based logo if image fails to load
 */
export function Logo({ variant = 'full', size = 'md', className = '' }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  const iconSizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-lg',
    lg: 'w-12 h-12 text-xl',
  };

  // Fallback text-based logo
  if (imageError) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className={`${iconSizes[size]} bg-accent-primary rounded-lg flex items-center justify-center`}>
          <span className="text-dark-primary font-bold">U+</span>
        </div>
        {variant === 'full' && (
          <span className={`text-${size === 'sm' ? 'base' : 'lg'} font-bold text-text-primary`}>
            {businessInfo.name}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/logo.jpg"
        alt="UKLID PLUS PRAHA"
        className={`${sizeClasses[size]} w-auto object-contain`}
        onError={() => setImageError(true)}
      />
      {variant === 'full' && (
        <span className={`text-${size === 'sm' ? 'base' : 'lg'} font-bold text-text-primary`}>
          {businessInfo.name}
        </span>
      )}
    </div>
  );
}

export default Logo;