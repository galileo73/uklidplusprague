import { HTMLAttributes, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  as?: 'div' | 'article' | 'section';
  animated?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', hover = true, glow = false, as: Component = 'div', animated = false, ...props }, ref) => {
    const baseStyles = 'bg-dark-secondary border border-white/5 rounded-2xl p-6';

    const hoverStyles = hover
      ? 'transition-all duration-300 hover:border-accent-primary/20 hover:shadow-card-hover'
      : '';

    const glowStyles = glow ? 'shadow-glow-sm' : '';

    const combinedClassName = `${baseStyles} ${hoverStyles} ${glowStyles} ${className}`.trim();

    if (animated) {
      return (
        <motion.div
          ref={ref}
          className={combinedClassName}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          {...(props as HTMLMotionProps<'div'>)}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <Component ref={ref} className={combinedClassName} {...props}>
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';

export default Card;