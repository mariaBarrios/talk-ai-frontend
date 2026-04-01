import { motion } from 'framer-motion';
import { AnimatedSection } from '../../components/AnimatedSection/AnimatedSection';
import { LevelBanner } from '../../components/LevelBanner/LevelBanner';
import { PixelSprite } from '../../components/PixelSprite/PixelSprite';
import { PixelText } from '../../components/PixelText/PixelText';
import styles from './AIWithExperienceSection.module.css';

const SHINES = [
  { text: 'Boilerplate y código repetitivo' },
  { text: 'Refactors mecánicos' },
  { text: 'Exploración de APIs desconocidas' },
  { text: 'Prototipado rápido' },
  { text: 'Generación de tests básicos' },
];

const FAILS = [
  { text: 'Decisiones de arquitectura' },
  { text: 'Edge cases y race conditions' },
  { text: 'Contexto de negocio específico' },
  { text: 'Rendimiento y optimización' },
  { text: 'Seguridad (XSS, CSRF, inyecciones)' },
];

export const AIWithExperienceSection: React.FC = () => (
  <AnimatedSection id="ai-experience">
    <LevelBanner
      level={5}
      title="POWER-UP"
      subtitle="Cómo uso la IA en equipos de producto reales"
      color="var(--color-neon-magenta)"
    />

    <blockquote className={styles.quote}>
      "La IA me ayuda mucho, y la experiencia me ayuda a validar mejor cada respuesta. Ese criterio se entrena practicando."
    </blockquote>

    <div className={styles.columns}>
      <div className={styles.column}>
        <PixelText as="h3" size="sm" color="var(--color-neon-green)" glow>
          DONDE AYUDA MAS
        </PixelText>
        <ul className={styles.list}>
          {SHINES.map((item, i) => (
            <motion.li
              key={i}
              className={styles.item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <PixelSprite name="check" size={20} color="var(--color-neon-green)" /> {item.text}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className={styles.column}>
        <PixelText as="h3" size="sm" color="var(--color-neon-red)" glow>
          DONDE NECESITA CRITERIO
        </PixelText>
        <ul className={styles.list}>
          {FAILS.map((item, i) => (
            <motion.li
              key={i}
              className={styles.item}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <PixelSprite name="cross" size={20} color="var(--color-neon-red)" /> {item.text}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>

    <div className={styles.multiplier}>
      <PixelText as="span" size="sm" color="var(--color-neon-yellow)" glow>
        LA IA ES UN MULTIPLICADOR
      </PixelText>
      <p className={styles.formula}>
        <span className={styles.num}>0</span>
        <span className={styles.op}>×</span>
        <span className={styles.num}>1000</span>
        <span className={styles.op}>=</span>
        <span className={styles.result}>0</span>
      </p>
      <p className={styles.message}>
        Invierte en subir tu numero base, paso a paso.
      </p>
    </div>
  </AnimatedSection>
);
