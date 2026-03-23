import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import styles from './ArcadeCounter.module.css';

interface Props {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
  color?: string;
}

export const ArcadeCounter: React.FC<Props> = ({
  value,
  label,
  suffix = '',
  duration = 1500,
  color = 'var(--color-neon-yellow)',
}) => {
  const [ref, isInView] = useInView(0.5);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      className={styles.counter}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
    >
      <span className={styles.value} style={{ color }}>
        {count}{suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </motion.div>
  );
};
