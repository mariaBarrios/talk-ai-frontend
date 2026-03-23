import { motion } from 'framer-motion';
import styles from './XpBar.module.css';

interface Props {
  progress: number;
  level: number;
}

export const XpBar: React.FC<Props> = ({ progress, level }) => (
  <div className={styles.container} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
    <span className={styles.label}>LVL {level}</span>
    <div className={styles.track}>
      <motion.div
        className={styles.fill}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
    <span className={styles.xp}>{progress}%</span>
  </div>
);
