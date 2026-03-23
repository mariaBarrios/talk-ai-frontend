import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import styles from './AnimatedSection.module.css';

interface Props {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const AnimatedSection: React.FC<Props> = ({ id, children, className = '' }) => {
  const [ref, isInView] = useInView(0.15);

  return (
    <section
      ref={ref}
      id={id}
      data-section-id={id}
      className={`${styles.section} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={styles.inner}
      >
        {children}
      </motion.div>
    </section>
  );
};
