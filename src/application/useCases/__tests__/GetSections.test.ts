import { describe, it, expect, vi } from 'vitest';
import type { Section } from '../../../domain/models/Section';
import type { TimelineEvent } from '../../../domain/models/TimelineEvent';
import type { QuizQuestion } from '../../../domain/models/QuizQuestion';
import type { SectionRepository } from '../../../domain/ports/SectionRepository';
import { GetSections } from '../GetSections';

describe('GetSections', () => {
  it('delegates all() to repository.getSections', () => {
    const sections: Section[] = [];
    const repository: SectionRepository = {
      getSections: vi.fn(() => sections),
      getTimelineEvents: vi.fn(() => []),
      getQuizQuestions: vi.fn(() => []),
    };
    const useCase = new GetSections(repository);
    expect(useCase.all()).toBe(sections);
    expect(repository.getSections).toHaveBeenCalledTimes(1);
  });

  it('delegates timeline() to repository.getTimelineEvents', () => {
    const events: TimelineEvent[] = [];
    const repository: SectionRepository = {
      getSections: vi.fn(() => []),
      getTimelineEvents: vi.fn(() => events),
      getQuizQuestions: vi.fn(() => []),
    };
    const useCase = new GetSections(repository);
    expect(useCase.timeline()).toBe(events);
    expect(repository.getTimelineEvents).toHaveBeenCalledTimes(1);
  });

  it('delegates quiz() to repository.getQuizQuestions', () => {
    const questions: QuizQuestion[] = [];
    const repository: SectionRepository = {
      getSections: vi.fn(() => []),
      getTimelineEvents: vi.fn(() => []),
      getQuizQuestions: vi.fn(() => questions),
    };
    const useCase = new GetSections(repository);
    expect(useCase.quiz()).toBe(questions);
    expect(repository.getQuizQuestions).toHaveBeenCalledTimes(1);
  });
});
