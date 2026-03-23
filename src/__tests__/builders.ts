import { vi } from 'vitest';
import type { QuizQuestion } from '../domain/models/QuizQuestion';
import type { TimelineEvent } from '../domain/models/TimelineEvent';
import type { Section } from '../domain/models/Section';
import type { SectionRepository } from '../domain/ports/SectionRepository';
import type { ProgressTracker } from '../domain/ports/ProgressTracker';

export function aQuizQuestion(overrides?: Partial<QuizQuestion>): QuizQuestion {
  return {
    id: 'q-test',
    question: 'What is 1 + 1?',
    options: [
      { id: 'a', text: 'Option A' },
      { id: 'b', text: 'Option B' },
      { id: 'c', text: 'Option C' },
    ],
    correctOptionId: 'a',
    explanation: 'Test explanation',
    ...overrides,
  };
}

export function aTimelineEvent(overrides?: Partial<TimelineEvent>): TimelineEvent {
  return {
    id: 'evt-test',
    year: 2020,
    label: 'Test Event',
    tech: 'TypeScript',
    description: 'A test event',
    spriteVariant: 'rookie',
    ...overrides,
  };
}

export function aSection(overrides?: Partial<Section>): Section {
  return {
    id: 'section-test',
    level: 0,
    title: 'TEST SECTION',
    subtitle: 'A test section',
    content: [{ type: 'text', value: 'Test content' }],
    ...overrides,
  };
}

export function aMockSectionRepository(data?: {
  sections?: Section[];
  events?: TimelineEvent[];
  questions?: QuizQuestion[];
}): SectionRepository {
  return {
    getSections: vi.fn<() => Section[]>().mockReturnValue(data?.sections ?? [aSection()]),
    getTimelineEvents: vi.fn<() => TimelineEvent[]>().mockReturnValue(data?.events ?? [aTimelineEvent()]),
    getQuizQuestions: vi.fn<() => QuizQuestion[]>().mockReturnValue(data?.questions ?? [aQuizQuestion()]),
  };
}

export function aMockProgressTracker(state?: {
  currentLevel?: number;
  totalLevels?: number;
  percentage?: number;
}): ProgressTracker {
  return {
    getCurrentLevel: vi.fn<() => number>().mockReturnValue(state?.currentLevel ?? 0),
    getTotalLevels: vi.fn<() => number>().mockReturnValue(state?.totalLevels ?? 8),
    getProgressPercentage: vi.fn<() => number>().mockReturnValue(state?.percentage ?? 0),
    setCurrentLevel: vi.fn<(level: number) => void>(),
  };
}
