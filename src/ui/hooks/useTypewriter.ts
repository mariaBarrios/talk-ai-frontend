import { useEffect, useState } from 'react';

export function useTypewriter(text: string, speed = 40, startWhenVisible = false, isVisible = true): string {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(!startWhenVisible);

  useEffect(() => {
    if (startWhenVisible && isVisible && !started) {
      setStarted(true);
    }
  }, [isVisible, startWhenVisible, started]);

  useEffect(() => {
    if (!started) return;

    setDisplayText('');
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, started]);

  return displayText;
}
