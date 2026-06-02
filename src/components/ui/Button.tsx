import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'whatsapp' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

export type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type ButtonAsLink = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-primary text-dark-primary font-semibold hover:bg-accent-secondary hover:shadow-glow-md active:scale-95',
  secondary:
    'bg-transparent border-2 border-accent-primary text-accent-primary font-semibold hover:bg-accent-primary hover:text-dark-primary hover:shadow-glow-md active:scale-95',
  whatsapp:
    'bg-[#25D366] text-white font-semibold hover:bg-[#128C7E] hover:shadow-lg active:scale-95',
  outline:
    'bg-transparent border border-text-muted text-text-secondary font-medium hover:border-text-secondary hover:text-text-primary active:scale-95',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className = '', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

    if ('href' in props && props.href) {
      const { href, ...rest } = props;
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={combinedClassName} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={combinedClassName} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;