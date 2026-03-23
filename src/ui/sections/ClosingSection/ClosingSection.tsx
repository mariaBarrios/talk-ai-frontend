import { motion } from 'framer-motion';
import { PixelText } from '../../components/PixelText/PixelText';
import { TypewriterText } from '../../components/TypewriterText/TypewriterText';
import styles from './ClosingSection.module.css';

export const ClosingSection: React.FC = () => (
  <section className={styles.closing} id="closing">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={styles.content}
    >
      <PixelText as="span" size="sm" color="var(--color-neon-yellow)" glow>
        — LEVEL 7 — FINAL STAGE —
      </PixelText>

      <PixelText as="h2" size="lg" color="var(--color-neon-green)" glow>
        NEW GAME+
      </PixelText>

      <p className={styles.subtitle}>El siguiente nivel empieza ahora</p>

      <motion.blockquote
        className={styles.quote}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        "Estáis en el mejor momento posible para empezar. Tenéis herramientas que yo no tenía. Pero las herramientas sin criterio son peligrosas."
      </motion.blockquote>

      <motion.div
        className={styles.cta}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <PixelText as="h3" size="sm" color="var(--color-neon-cyan)" glow>
          QUEST:
        </PixelText>
        <p className={styles.ctaText}>
          Esta semana, coged algo que la IA os haya generado y reescribidlo desde cero. Entended cada línea. Ese es el primer paso.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className={styles.finalQuote}
      >
        <TypewriterText
          text='> "No os conforméis con ser usuarios de IA. Sed los que la hacen funcionar."'
          speed={50}
        />
      </motion.div>

      <motion.div
        className={styles.credits}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8 }}
      >
        <PixelText as="span" size="sm" color="var(--color-text-dim)">
          THANKS FOR PLAYING
        </PixelText>
        <PixelText as="span" size="sm" color="var(--color-neon-magenta)">
          GG
        </PixelText>
      </motion.div>
    </motion.div>

    <div className={styles.grid} />
  </section>
);
