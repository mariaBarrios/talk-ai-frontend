import { useMemo } from 'react';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useKonamiCode } from './hooks/useKonamiCode';
import { GetSections } from '../application/useCases/GetSections';
import { InMemorySectionRepository } from '../infrastructure/adapters/InMemorySectionRepository';
import { TOTAL_LEVELS } from './theme/tokens';
import { Scanlines } from './components/Scanlines/Scanlines';
import { KonamiEasterEgg } from './components/KonamiEasterEgg/KonamiEasterEgg';
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
  const { activated, reset } = useKonamiCode();

  const timeline = useMemo(() => getSections.timeline(), []);
  const questions = useMemo(() => getSections.quiz(), []);

  return (
    <>
      <Scanlines />
      <KonamiEasterEgg activated={activated} onDismiss={reset} />
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
