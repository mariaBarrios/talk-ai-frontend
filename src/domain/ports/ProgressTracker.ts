export interface ProgressTracker {
  getCurrentLevel(): number;
  getTotalLevels(): number;
  getProgressPercentage(): number;
  setCurrentLevel(level: number): void;
}
