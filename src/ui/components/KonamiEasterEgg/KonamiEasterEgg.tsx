import { useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './KonamiEasterEgg.module.css';

interface KonamiEasterEggProps {
  activated: boolean;
  onDismiss: () => void;
}

const MATRIX_CHARS = 'アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF<>/{}[]';
const AUTO_DISMISS_MS = 6_000;

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const fontSize = 14;
    let columns: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const colCount = Math.floor(canvas.width / fontSize);
      columns = Array.from({ length: colCount }, () =>
        Math.floor(Math.random() * canvas.height / fontSize),
      );
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns.length; i++) {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        ctx.fillText(char, i * fontSize, columns[i] * fontSize);

        if (columns[i] * fontSize > canvas.height && Math.random() > 0.975) {
          columns[i] = 0;
        }
        columns[i]++;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className={styles.matrixRain}>
      <canvas ref={canvasRef} />
    </div>
  );
}

const achievementItems = [
  { text: '+9999 XP', className: 'xpGain', delay: 2.2 },
  { text: 'ALL LEVELS UNLOCKED', className: 'unlock', delay: 3.0 },
  { text: 'GOD MODE: ON', className: 'godMode', delay: 3.8 },
] as const;

export const KonamiEasterEgg: React.FC<KonamiEasterEggProps> = ({ activated, onDismiss }) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const dismiss = useCallback(() => {
    clearTimeout(timerRef.current);
    onDismiss();
  }, [onDismiss]);

  useEffect(() => {
    if (!activated) return;

    timerRef.current = setTimeout(dismiss, AUTO_DISMISS_MS);

    const handleKey = () => dismiss();
    window.addEventListener('keydown', handleKey);

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', handleKey);
    };
  }, [activated, dismiss]);

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          className={styles.overlay}
          onClick={dismiss}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <div className={styles.bgPulse} />
          <div className={styles.crtFlicker} />
          <MatrixRain />

          <div className={styles.content}>
            <motion.div
              className={styles.glitchText}
              data-text="CHEAT CODE ACTIVATED"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.2 }}
            >
              CHEAT CODE ACTIVATED
            </motion.div>

            <motion.div
              className={styles.achievement}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              Achievement Unlocked: 🎮 Retro Master
            </motion.div>

            <motion.div
              className={styles.todo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              {'// TODO: Contratar a esta persona'}
            </motion.div>

            {achievementItems.map((item) => (
              <motion.div
                key={item.text}
                className={styles[item.className]}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: item.delay, type: 'spring', stiffness: 200 }}
              >
                {item.text}
              </motion.div>
            ))}
          </div>

          <span className={styles.dismissHint}>PRESS ANY KEY TO CONTINUE</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
