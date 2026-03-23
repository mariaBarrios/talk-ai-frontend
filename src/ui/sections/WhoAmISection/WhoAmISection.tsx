import { AnimatedSection } from '../../components/AnimatedSection/AnimatedSection';
import { LevelBanner } from '../../components/LevelBanner/LevelBanner';
import { Timeline } from '../../components/Timeline/Timeline';
import { ArcadeCounter } from '../../components/ArcadeCounter/ArcadeCounter';
import type { TimelineEvent } from '../../../domain/models/TimelineEvent';
import styles from './WhoAmISection.module.css';

interface Props {
  events: TimelineEvent[];
}

export const WhoAmISection: React.FC<Props> = ({ events }) => (
  <AnimatedSection id="whoami">
    <LevelBanner
      level={1}
      title="SELECT YOUR CHARACTER"
      subtitle="18 años de experiencia en 60 segundos"
    />

    <div className={styles.counters}>
      <ArcadeCounter value={18} label="Años dev" suffix="+" color="var(--color-neon-yellow)" />
      <ArcadeCounter value={5} label="Revoluciones tech" color="var(--color-neon-cyan)" />
      <ArcadeCounter value={6} label="Frameworks" suffix="+" color="var(--color-neon-green)" />
    </div>

    <Timeline events={events} />

    <blockquote className={styles.quote}>
      "He sobrevivido a 4 revoluciones tecnológicas. La IA es la 5ª. Y os cuento un secreto: las anteriores también iban a hacer que los programadores sobráramos."
    </blockquote>
  </AnimatedSection>
);
