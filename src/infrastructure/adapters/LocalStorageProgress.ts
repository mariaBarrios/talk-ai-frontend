import type { ProgressTracker } from '../../domain/ports/ProgressTracker';

const STORAGE_KEY = 'talk-ai-progress';

export class LocalStorageProgress implements ProgressTracker {
  private currentLevel = 0;
  private readonly totalLevels: number;

  constructor(totalLevels: number) {
    this.totalLevels = totalLevels;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      this.currentLevel = Number(saved);
    }
  }

  getCurrentLevel(): number {
    return this.currentLevel;
  }

  getTotalLevels(): number {
    return this.totalLevels;
  }

  getProgressPercentage(): number {
    if (this.totalLevels === 0) return 0;
    return Math.round((this.currentLevel / this.totalLevels) * 100);
  }

  setCurrentLevel(level: number): void {
    this.currentLevel = level;
    localStorage.setItem(STORAGE_KEY, String(level));
  }
}
