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
      subtitle="El mundo real no tiene modo fácil"
      color="var(--color-neon-red)"
    />

    <div className={styles.cards}>
      <div className={styles.card}>
        <PixelText as="h3" size="sm" color="var(--color-neon-red)" glow>
          BOSS: CODE REVIEW
        </PixelText>
        <p className={styles.text}>
          En mi equipo, cada línea de código pasa por una Pull Request donde 2-3 personas la revisan. Si no sabes explicar <strong>POR QUÉ</strong> escribiste algo así, no pasa.
        </p>
      </div>

      <div className={styles.card}>
        <PixelText as="h3" size="sm" color="var(--color-neon-red)" glow>
          BOSS: BUG EN PRODUCCIÓN
        </PixelText>
        <p className={styles.text}>
          Son las 20:00. Producción está caída. Tu jefe te mira. El código que no entiendes se ha convertido en una bomba de relojería. ¿Ahora qué?
        </p>
      </div>

      <div className={styles.card}>
        <PixelText as="h3" size="sm" color="var(--color-neon-red)" glow>
          BOSS: DEUDA TÉCNICA
        </PixelText>
        <p className={styles.text}>
          Cada atajo que tomas hoy se acumula. Y alguien tiene que pagar esa deuda: tú, a las 8 de la tarde, con producción caída.
        </p>
      </div>
    </div>

    <div className={styles.interaction}>
      <TypewriterText
        text='> ¿Qué creéis que pasa cuando el código que no entendéis tiene un bug en producción y vuestro jefe os pregunta qué ha pasado?_'
        speed={30}
      />
    </div>
  </AnimatedSection>
);
