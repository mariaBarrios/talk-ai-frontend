import { useCallback, useEffect, useRef, useState } from 'react';

const KONAMI_SEQUENCE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
] as const;

const TIMEOUT_MS = 3_000;

export function useKonamiCode() {
  const [activated, setActivated] = useState(false);
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const reset = useCallback(() => {
    setActivated(false);
    indexRef.current = 0;
  }, []);

  useEffect(() => {
    if (activated) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      clearTimeout(timerRef.current);

      const expected = KONAMI_SEQUENCE[indexRef.current];
      if (e.key.toLowerCase() === expected.toLowerCase()) {
        indexRef.current += 1;
        if (indexRef.current === KONAMI_SEQUENCE.length) {
          setActivated(true);
          indexRef.current = 0;
          return;
        }
      } else {
        indexRef.current = 0;
      }

      timerRef.current = setTimeout(() => {
        indexRef.current = 0;
      }, TIMEOUT_MS);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timerRef.current);
    };
  }, [activated]);

  return { activated, reset } as const;
}
