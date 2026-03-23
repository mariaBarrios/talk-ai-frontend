import { describe, it, expect } from 'vitest';
import { GetSections } from '../GetSections';
import { aMockSectionRepository, aSection, aTimelineEvent, aQuizQuestion } from '../../../__tests__/builders';

describe('GetSections', () => {
  it('returns sections from the repository', () => {
    const sections = [aSection({ id: 'hero' }), aSection({ id: 'closing' })];
    const repo = aMockSectionRepository({ sections });
    const useCase = new GetSections(repo);

    expect(useCase.all()).toEqual(sections);
  });

  it('returns timeline events from the repository', () => {
    const events = [aTimelineEvent({ id: 'abap', year: 2008 })];
    const repo = aMockSectionRepository({ events });
    const useCase = new GetSections(repo);

    expect(useCase.timeline()).toEqual(events);
  });

  it('returns quiz questions from the repository', () => {
    const questions = [aQuizQuestion({ id: 'q1' }), aQuizQuestion({ id: 'q2' })];
    const repo = aMockSectionRepository({ questions });
    const useCase = new GetSections(repo);

    expect(useCase.quiz()).toEqual(questions);
  });
});
