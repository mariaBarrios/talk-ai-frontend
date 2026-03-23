import { describe, it, expect, beforeEach } from 'vitest';
import { LocalStorageProgress } from '../LocalStorageProgress';

const STORAGE_KEY = 'talk-ai-progress';

describe('LocalStorageProgress', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('starts at level 0 when no saved state exists', () => {
    const progress = new LocalStorageProgress(8);

    expect(progress.getCurrentLevel()).toBe(0);
    expect(progress.getTotalLevels()).toBe(8);
  });

  it('restores saved level from localStorage', () => {
    localStorage.setItem(STORAGE_KEY, '4');

    const progress = new LocalStorageProgress(8);

    expect(progress.getCurrentLevel()).toBe(4);
  });

  it('persists level changes to localStorage', () => {
    const progress = new LocalStorageProgress(8);

    progress.setCurrentLevel(5);

    expect(progress.getCurrentLevel()).toBe(5);
    expect(localStorage.getItem(STORAGE_KEY)).toBe('5');
  });

  it('calculates progress percentage', () => {
    const progress = new LocalStorageProgress(8);
    progress.setCurrentLevel(3);

    expect(progress.getProgressPercentage()).toBe(38);
  });

  it('returns 0% when totalLevels is 0 (avoids division by zero)', () => {
    const progress = new LocalStorageProgress(0);

    expect(progress.getProgressPercentage()).toBe(0);
  });
});
