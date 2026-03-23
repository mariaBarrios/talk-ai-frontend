import styles from './PixelText.module.css';

interface Props {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  glow?: boolean;
  className?: string;
}

export const PixelText: React.FC<Props> = ({
  children,
  as: Tag = 'p',
  size = 'md',
  color,
  glow = false,
  className = '',
}) => (
  <Tag
    className={`${styles.pixel} ${styles[size]} ${glow ? styles.glow : ''} ${className}`}
    style={color ? { color, textShadow: glow ? `0 0 10px ${color}, 0 0 20px ${color}` : undefined } : undefined}
  >
    {children}
  </Tag>
);
