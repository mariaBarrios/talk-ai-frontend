import { describe, it, expect } from 'vitest';
import { InMemorySectionRepository } from '../InMemorySectionRepository';

describe('InMemorySectionRepository', () => {
  const repo = new InMemorySectionRepository();

  describe('getSections', () => {
    it('returns all 8 sections with unique ids', () => {
      const sections = repo.getSections();
      const ids = sections.map((s) => s.id);

      expect(sections).toHaveLength(8);
      expect(new Set(ids).size).toBe(8);
    });

    it('every section has a non-empty title and subtitle', () => {
      for (const section of repo.getSections()) {
        expect(section.title.trim()).not.toBe('');
        expect(section.subtitle.trim()).not.toBe('');
      }
    });
  });

  describe('getTimelineEvents', () => {
    it('returns events in chronological order', () => {
      const years = repo.getTimelineEvents().map((e) => e.year);

      expect(years).toEqual([...years].sort((a, b) => a - b));
      expect(years.length).toBeGreaterThan(0);
    });

    it('every event has a valid sprite variant', () => {
      for (const event of repo.getTimelineEvents()) {
        expect(event.spriteVariant).toBeTruthy();
      }
    });
  });

  describe('getQuizQuestions', () => {
    it('every question has its correctOptionId in its options', () => {
      for (const q of repo.getQuizQuestions()) {
        const optionIds = q.options.map((o) => o.id);
        expect(optionIds).toContain(q.correctOptionId);
      }
    });

    it('every question has at least 2 options', () => {
      for (const q of repo.getQuizQuestions()) {
        expect(q.options.length).toBeGreaterThanOrEqual(2);
      }
    });

    it('every question has a non-empty explanation', () => {
      for (const q of repo.getQuizQuestions()) {
        expect(q.explanation.trim()).not.toBe('');
      }
    });
  });
});
