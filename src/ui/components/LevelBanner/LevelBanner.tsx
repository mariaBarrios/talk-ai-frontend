import { motion } from 'framer-motion';
import { PixelText } from '../PixelText/PixelText';
import styles from './LevelBanner.module.css';

interface Props {
  level: number;
  title: string;
  subtitle: string;
  color?: string;
}

export const LevelBanner: React.FC<Props> = ({
  level,
  title,
  subtitle,
  color = 'var(--color-neon-cyan)',
}) => (
  <div className={styles.banner}>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={styles.line}
      style={{ background: color }}
    />
    {level > 0 && (
      <PixelText as="span" size="sm" color="var(--color-neon-yellow)" glow>
        — LEVEL {level} —
      </PixelText>
    )}
    <PixelText as="h2" size="lg" color={color} glow>
      {title}
    </PixelText>
    <p className={styles.subtitle}>{subtitle}</p>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={styles.line}
      style={{ background: color }}
    />
  </div>
);
