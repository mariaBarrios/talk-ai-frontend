import { AnimatedSection } from '../../components/AnimatedSection/AnimatedSection';
import { LevelBanner } from '../../components/LevelBanner/LevelBanner';
import { SkillTree } from '../../components/SkillTree/SkillTree';
import { Quiz } from '../../components/Quiz/Quiz';
import { PixelText } from '../../components/PixelText/PixelText';
import type { QuizQuestion } from '../../../domain/models/QuizQuestion';
import styles from './FundamentalsSection.module.css';

interface Props {
  questions: QuizQuestion[];
}

export const FundamentalsSection: React.FC<Props> = ({ questions }) => (
  <AnimatedSection id="fundamentals">
    <LevelBanner
      level={4}
      title="SKILL TREE"
      subtitle="Los fundamentos que no cambian"
      color="var(--color-neon-green)"
    />

    <blockquote className={styles.quote}>
      "La web que estáis viendo ahora mismo está hecha con arquitectura hexagonal. Si mañana React desaparece, el 70% del código sigue valiendo."
    </blockquote>

    <SkillTree />

    <div className={styles.quizSection}>
      <PixelText as="h3" size="sm" color="var(--color-neon-magenta)" glow>
        BOSS FIGHT: QUIZ DE FUNDAMENTOS
      </PixelText>
      <p className={styles.quizIntro}>
        Veamos cuánto sabéis de los fundamentos que la IA no os va a enseñar.
      </p>
      <Quiz questions={questions} />
    </div>
  </AnimatedSection>
);
