import { useTypewriter } from '../../hooks/useTypewriter';
import { useInView } from '../../hooks/useInView';
import styles from './TypewriterText.module.css';

interface Props {
  text: string;
  speed?: number;
  className?: string;
}

export const TypewriterText: React.FC<Props> = ({ text, speed = 35, className = '' }) => {
  const [ref, isInView] = useInView(0.5);
  const displayText = useTypewriter(text, speed, true, isInView);

  return (
    <div ref={ref} className={`${styles.container} ${className}`}>
      <span className={styles.text}>{displayText}</span>
      {displayText.length < text.length && <span className={styles.cursor}>_</span>}
    </div>
  );
};
