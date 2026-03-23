import { motion } from 'framer-motion';
import { PixelText } from '../../components/PixelText/PixelText';
import { TypewriterText } from '../../components/TypewriterText/TypewriterText';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => (
  <section className={styles.hero} id="hero">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.content}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <PixelText as="span" size="sm" color="var(--color-neon-yellow)" glow>
          — LOADING... —
        </PixelText>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <PixelText as="h1" size="xl" color="var(--color-neon-cyan)" glow>
          PRESS START
        </PixelText>
      </motion.div>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        Desarrollo Frontend en la Era de la IA
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className={styles.prompt}
      >
        <TypewriterText
          text="> ¿Cuántos usáis IA para hacer trabajos de la carrera?_"
          speed={45}
        />
      </motion.div>

      <motion.div
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <PixelText as="span" size="sm" color="var(--color-text-dim)">
          ▼ SCROLL TO PLAY ▼
        </PixelText>
      </motion.div>
    </motion.div>

    <div className={styles.grid} />
  </section>
);
