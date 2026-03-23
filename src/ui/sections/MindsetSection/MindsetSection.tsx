import { motion } from 'framer-motion';
import { AnimatedSection } from '../../components/AnimatedSection/AnimatedSection';
import { LevelBanner } from '../../components/LevelBanner/LevelBanner';
import { PixelText } from '../../components/PixelText/PixelText';
import styles from './MindsetSection.module.css';

const MINDSET_ITEMS = [
  {
    icon: '🔍',
    title: 'Curiosidad > Comodidad',
    text: 'Cuando la IA te dé una solución, pregúntate: ¿podría yo haber llegado a esto? Si la respuesta es no, tienes deberes.',
    color: 'var(--color-neon-cyan)',
  },
  {
    icon: '🧠',
    title: 'Pensamiento Crítico',
    text: 'Aprender a cuestionar, no a copiar. Cada línea de código que aceptas sin entender es una vulnerabilidad.',
    color: 'var(--color-neon-green)',
  },
  {
    icon: '🏃',
    title: 'Maratón, no Sprint',
    text: 'La carrera es el calentamiento. El juego de verdad empieza cuando os contrate alguien. Mirad a largo plazo.',
    color: 'var(--color-neon-yellow)',
  },
  {
    icon: '🔄',
    title: 'Aprender a Aprender',
    text: 'La tecnología cambia cada 3-5 años. Los fundamentos llevan décadas. Invertid en lo que permanece.',
    color: 'var(--color-neon-magenta)',
  },
];

export const MindsetSection: React.FC = () => (
  <AnimatedSection id="mindset">
    <LevelBanner
      level={6}
      title="CONTINUE?"
      subtitle="Game Over vs New Game+"
      color="var(--color-neon-cyan)"
    />

    <div className={styles.grid}>
      {MINDSET_ITEMS.map((item, i) => (
        <motion.div
          key={item.title}
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          style={{ borderColor: item.color }}
        >
          <span className={styles.icon}>{item.icon}</span>
          <PixelText as="h3" size="sm" color={item.color}>
            {item.title}
          </PixelText>
          <p className={styles.text}>{item.text}</p>
        </motion.div>
      ))}
    </div>
  </AnimatedSection>
);
