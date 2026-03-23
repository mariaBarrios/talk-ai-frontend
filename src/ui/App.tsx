import { useMemo } from 'react';
import { useScrollProgress } from './hooks/useScrollProgress';
import { GetSections } from '../application/useCases/GetSections';
import { InMemorySectionRepository } from '../infrastructure/adapters/InMemorySectionRepository';
import { TOTAL_LEVELS } from './theme/tokens';
import { Scanlines } from './components/Scanlines/Scanlines';
import { XpBar } from './components/XpBar/XpBar';
import { HeroSection } from './sections/HeroSection/HeroSection';
import { WhoAmISection } from './sections/WhoAmISection/WhoAmISection';
import { RealWorldSection } from './sections/RealWorldSection/RealWorldSection';
import { CompetenceTrapSection } from './sections/CompetenceTrapSection/CompetenceTrapSection';
import { FundamentalsSection } from './sections/FundamentalsSection/FundamentalsSection';
import { AIWithExperienceSection } from './sections/AIWithExperienceSection/AIWithExperienceSection';
import { MindsetSection } from './sections/MindsetSection/MindsetSection';
import { ClosingSection } from './sections/ClosingSection/ClosingSection';

const repository = new InMemorySectionRepository();
const getSections = new GetSections(repository);

export const App: React.FC = () => {
  const progress = useScrollProgress();
  const currentLevel = Math.min(TOTAL_LEVELS, Math.floor((progress / 100) * TOTAL_LEVELS) + 1);

  const timeline = useMemo(() => getSections.timeline(), []);
  const questions = useMemo(() => getSections.quiz(), []);

  return (
    <>
      <Scanlines />
      <XpBar progress={progress} level={currentLevel} />

      <main>
        <HeroSection />
        <WhoAmISection events={timeline} />
        <RealWorldSection />
        <CompetenceTrapSection />
        <FundamentalsSection questions={questions} />
        <AIWithExperienceSection />
        <MindsetSection />
        <ClosingSection />
      </main>
    </>
  );
};
