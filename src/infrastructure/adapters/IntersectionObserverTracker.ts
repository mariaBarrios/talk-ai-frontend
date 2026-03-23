import type { ScrollTracker } from '../../domain/ports/ScrollTracker';

export class IntersectionObserverTracker implements ScrollTracker {
  private observer: IntersectionObserver;
  private callbacks = new Map<HTMLElement, (id: string) => void>();

  constructor(threshold = 0.4) {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const callback = this.callbacks.get(el);
            const id = el.dataset.sectionId;
            if (callback && id) {
              callback(id);
            }
          }
        });
      },
      { threshold }
    );
  }

  observe(element: HTMLElement, onVisible: (id: string) => void): void {
    this.callbacks.set(element, onVisible);
    this.observer.observe(element);
  }

  unobserve(element: HTMLElement): void {
    this.callbacks.delete(element);
    this.observer.unobserve(element);
  }

  disconnect(): void {
    this.callbacks.clear();
    this.observer.disconnect();
  }
}
