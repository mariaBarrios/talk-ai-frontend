import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useKonamiCode } from '../useKonamiCode';

const FULL_SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
] as const;

function pressKey(key: string) {
  act(() => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key }));
  });
}

describe('useKonamiCode', () => {
  it('starts not activated', () => {
    const { result } = renderHook(() => useKonamiCode());
    expect(result.current.activated).toBe(false);
  });

  it('activates on full Konami sequence', () => {
    const { result } = renderHook(() => useKonamiCode());

    for (const key of FULL_SEQUENCE) {
      pressKey(key);
    }

    expect(result.current.activated).toBe(true);
  });

  it('does not activate on partial sequence', () => {
    const { result } = renderHook(() => useKonamiCode());

    for (const key of FULL_SEQUENCE.slice(0, 5)) {
      pressKey(key);
    }

    expect(result.current.activated).toBe(false);
  });

  it('does not activate on wrong key in sequence', () => {
    const { result } = renderHook(() => useKonamiCode());

    pressKey('ArrowUp');
    pressKey('ArrowUp');
    pressKey('x');

    for (const key of FULL_SEQUENCE.slice(2)) {
      pressKey(key);
    }

    expect(result.current.activated).toBe(false);
  });

  it('reset() deactivates', () => {
    const { result } = renderHook(() => useKonamiCode());

    for (const key of FULL_SEQUENCE) {
      pressKey(key);
    }
    expect(result.current.activated).toBe(true);

    act(() => {
      result.current.reset();
    });

    expect(result.current.activated).toBe(false);
  });
});
