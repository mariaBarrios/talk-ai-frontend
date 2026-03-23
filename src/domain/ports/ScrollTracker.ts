export interface ScrollTracker {
  observe(element: HTMLElement, onVisible: (id: string) => void): void;
  unobserve(element: HTMLElement): void;
  disconnect(): void;
}
