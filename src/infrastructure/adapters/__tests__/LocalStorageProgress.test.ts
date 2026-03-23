import { describe, it, expect, beforeEach } from 'vitest';
import { LocalStorageProgress } from '../LocalStorageProgress';

describe('LocalStorageProgress', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('starts at level 0 when localStorage is empty', () => {
    const progress = new LocalStorageProgress(8);
    expect(progress.getCurrentLevel()).toBe(0);
  });

  it('setCurrentLevel updates current level and persists to localStorage', () => {
    const progress = new LocalStorageProgress(8);
    progress.setCurrentLevel(5);
    expect(progress.getCurrentLevel()).toBe(5);
    expect(localStorage.getItem('talk-ai-progress')).toBe('5');
  });

  it('getProgressPercentage returns correct percentage (e.g. 3/8 = 38)', () => {
    const progress = new LocalStorageProgress(8);
    progress.setCurrentLevel(3);
    expect(progress.getProgressPercentage()).toBe(38);
  });

  it('getProgressPercentage returns 0 when totalLevels is 0', () => {
    const progress = new LocalStorageProgress(0);
    progress.setCurrentLevel(5);
    expect(progress.getProgressPercentage()).toBe(0);
  });

  it('restores level from localStorage on construction', () => {
    localStorage.setItem('talk-ai-progress', '4');
    const progress = new LocalStorageProgress(8);
    expect(progress.getCurrentLevel()).toBe(4);
  });
});
