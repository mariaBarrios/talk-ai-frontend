import type { ProgressTracker } from '../../domain/ports/ProgressTracker';

export class TrackScrollProgress {
  private readonly tracker: ProgressTracker;

  constructor(tracker: ProgressTracker) {
    this.tracker = tracker;
  }

  setLevel(level: number): void {
    this.tracker.setCurrentLevel(level);
  }

  getProgress(): { current: number; total: number; percentage: number } {
    return {
      current: this.tracker.getCurrentLevel(),
      total: this.tracker.getTotalLevels(),
      percentage: this.tracker.getProgressPercentage(),
    };
  }
}
