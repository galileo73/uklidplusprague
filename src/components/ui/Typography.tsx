import { HTMLAttributes, forwardRef, createElement } from 'react';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: TypographyVariant;
  gradient?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
  h2: 'text-3xl md:text-4xl font-bold tracking-tight',
  h3: 'text-xl md:text-2xl font-semibold',
  h4: 'text-lg md:text-xl font-semibold',
  p: 'text-base leading-relaxed',
  span: 'text-base',
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ as = 'p', gradient = false, children, className = '', ...props }, ref) => {
    const baseStyles = variantStyles[as];
    const gradientStyles = gradient ? 'bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent' : '';

    const combinedClassName = `${baseStyles} ${gradientStyles} ${className}`.trim();

    return createElement(
      as,
      {
        ref,
        className: combinedClassName,
        ...props,
      },
      children
    );
  }
);

Typography.displayName = 'Typography';

// Convenience components
export const H1 = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'as'>>(
  (props, ref) => <Typography ref={ref} as="h1" {...props} />
);

export const H2 = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'as'>>(
  (props, ref) => <Typography ref={ref} as="h2" {...props} />
);

export const H3 = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'as'>>(
  (props, ref) => <Typography ref={ref} as="h3" {...props} />
);

export const H4 = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'as'>>(
  (props, ref) => <Typography ref={ref} as="h4" {...props} />
);

export const Text = forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'as'>>(
  (props, ref) => <Typography ref={ref} as="p" {...props} />
);

export const Span = forwardRef<HTMLSpanElement, Omit<TypographyProps, 'as'>>(
  (props, ref) => <Typography ref={ref} as="span" {...props} />
);

H1.displayName = 'H1';
H2.displayName = 'H2';
H3.displayName = 'H3';
H4.displayName = 'H4';
Text.displayName = 'Text';
Span.displayName = 'Span';

export default Typography;