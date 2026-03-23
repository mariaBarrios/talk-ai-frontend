import { describe, it, expect } from 'vitest';
import { InMemorySectionRepository } from '../InMemorySectionRepository';

describe('InMemorySectionRepository', () => {
  const repository = new InMemorySectionRepository();

  it('returns 8 sections with unique ids', () => {
    const sections = repository.getSections();
    expect(sections).toHaveLength(8);
    const ids = sections.map((s) => s.id);
    expect(new Set(ids).size).toBe(8);
    expect(ids).toEqual([
      'hero',
      'whoami',
      'realworld',
      'competence-trap',
      'fundamentals',
      'ai-experience',
      'mindset',
      'closing',
    ]);
  });

  it('returns 4 timeline events ordered chronologically (2008, 2015, 2018, 2023)', () => {
    const events = repository.getTimelineEvents();
    expect(events).toHaveLength(4);
    const years = events.map((e) => e.year);
    expect(years).toEqual([2008, 2015, 2018, 2023]);
    expect(events.map((e) => e.id)).toEqual(['abap', 'frontend', 'react', 'ai']);
  });

  it('returns 4 quiz questions', () => {
    const questions = repository.getQuizQuestions();
    expect(questions).toHaveLength(4);
    expect(questions.map((q) => q.id)).toEqual(['q1', 'q2', 'q3', 'q4']);
  });

  it("every quiz question's correctOptionId exists in its options array", () => {
    const questions = repository.getQuizQuestions();
    for (const q of questions) {
      const optionIds = q.options.map((o) => o.id);
      expect(optionIds).toContain(q.correctOptionId);
    }
  });

  it('each section has a non-empty title and subtitle', () => {
    const sections = repository.getSections();
    for (const s of sections) {
      expect(s.title.trim().length).toBeGreaterThan(0);
      expect(s.subtitle.trim().length).toBeGreaterThan(0);
    }
  });
});
