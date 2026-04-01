import { AnimatedSection } from '../../components/AnimatedSection/AnimatedSection';
import { LevelBanner } from '../../components/LevelBanner/LevelBanner';
import { PixelText } from '../../components/PixelText/PixelText';
import { TypewriterText } from '../../components/TypewriterText/TypewriterText';
import styles from './RealWorldSection.module.css';

export const RealWorldSection: React.FC = () => (
  <AnimatedSection id="realworld">
    <LevelBanner
      level={2}
      title="DIFFICULTY: HARD"
      subtitle="Aprender en equipo te hace crecer mas rapido"
      color="var(--color-neon-red)"
    />

    <div className={styles.cards}>
      <div className={styles.card}>
        <PixelText as="h3" size="sm" color="var(--color-neon-red)" glow>
          BOSS: CODE REVIEW
        </PixelText>
        <p className={styles.text}>
          En mi equipo, cada linea pasa por una Pull Request revisada por 2-3 personas. Cuando compartes el <strong>POR QUE</strong> de tus decisiones, todo fluye mejor.
        </p>
      </div>

      <div className={styles.card}>
        <PixelText as="h3" size="sm" color="var(--color-neon-red)" glow>
          BOSS: BUG EN PRODUCCIÓN
        </PixelText>
        <p className={styles.text}>
          Cuando aparece un bug en produccion, entender el codigo marca la diferencia: te ayuda a mantener la calma y resolverlo en equipo.
        </p>
      </div>

      <div className={styles.card}>
        <PixelText as="h3" size="sm" color="var(--color-neon-red)" glow>
          BOSS: DEUDA TÉCNICA
        </PixelText>
        <p className={styles.text}>
          Cada atajo de hoy puede complicar manana. Si cuidamos la base desde el principio, avanzamos con mas confianza.
        </p>
      </div>
    </div>

    <div className={styles.interaction}>
      <TypewriterText
        text='> ¿Que te da mas seguridad cuando algo falla: copiar una solucion o entenderla de verdad?_'
        speed={30}
      />
    </div>
  </AnimatedSection>
);
