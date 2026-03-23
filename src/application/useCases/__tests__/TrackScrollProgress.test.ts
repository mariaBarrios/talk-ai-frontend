import { describe, it, expect } from 'vitest';
import { TrackScrollProgress } from '../TrackScrollProgress';
import { aMockProgressTracker } from '../../../__tests__/builders';

describe('TrackScrollProgress', () => {
  it('forwards the level to the tracker', () => {
    const tracker = aMockProgressTracker();
    const useCase = new TrackScrollProgress(tracker);

    useCase.setLevel(5);

    expect(tracker.setCurrentLevel).toHaveBeenCalledWith(5);
  });

  it('aggregates progress from the tracker into a single object', () => {
    const tracker = aMockProgressTracker({
      currentLevel: 3,
      totalLevels: 8,
      percentage: 38,
    });
    const useCase = new TrackScrollProgress(tracker);

    expect(useCase.getProgress()).toEqual({
      current: 3,
      total: 8,
      percentage: 38,
    });
  });
});
