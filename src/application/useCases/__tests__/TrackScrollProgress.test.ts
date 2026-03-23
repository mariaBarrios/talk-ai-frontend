import { describe, it, expect, vi } from 'vitest';
import type { ProgressTracker } from '../../../domain/ports/ProgressTracker';
import { TrackScrollProgress } from '../TrackScrollProgress';

describe('TrackScrollProgress', () => {
  it('delegates setLevel to tracker.setCurrentLevel', () => {
    const tracker: ProgressTracker = {
      getCurrentLevel: vi.fn(),
      getTotalLevels: vi.fn(),
      getProgressPercentage: vi.fn(),
      setCurrentLevel: vi.fn(),
    };
    const useCase = new TrackScrollProgress(tracker);
    useCase.setLevel(3);
    expect(tracker.setCurrentLevel).toHaveBeenCalledWith(3);
  });

  it('getProgress returns current, total, and percentage from tracker', () => {
    const tracker: ProgressTracker = {
      getCurrentLevel: vi.fn(() => 2),
      getTotalLevels: vi.fn(() => 10),
      getProgressPercentage: vi.fn(() => 20),
      setCurrentLevel: vi.fn(),
    };
    const useCase = new TrackScrollProgress(tracker);
    expect(useCase.getProgress()).toEqual({
      current: 2,
      total: 10,
      percentage: 20,
    });
  });
});
