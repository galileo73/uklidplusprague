import { HTMLAttributes, forwardRef } from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-accent-primary/20 text-accent-primary border-accent-primary/30',
  secondary: 'bg-white/10 text-text-secondary border-white/20',
  success: 'bg-success/20 text-success border-success/30',
  warning: 'bg-warning/20 text-warning border-warning/30',
  error: 'bg-error/20 text-error border-error/30',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', children, className = '', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-200';

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

    return (
      <span ref={ref} className={combinedClassName} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;