import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { QuizQuestion, QuizResult } from '../../../domain/models/QuizQuestion';
import { SubmitQuizAnswer } from '../../../application/useCases/SubmitQuizAnswer';
import { PixelText } from '../PixelText/PixelText';
import styles from './Quiz.module.css';

interface Props {
  questions: QuizQuestion[];
}

const submitAnswer = new SubmitQuizAnswer();

export const Quiz: React.FC<Props> = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentIndex];

  const handleSelect = (optionId: string) => {
    if (result) return;

    const res = submitAnswer.execute(question, optionId);
    setResult(res);
    if (res.isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setResult(null);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className={styles.container}>
        <PixelText as="h3" size="md" color="var(--color-neon-yellow)" glow>
          SCORE: {score}/{questions.length}
        </PixelText>
        <p className={styles.explanation}>
          {score === questions.length
            ? '¡Perfecto! Tienes buen nivel de fundamentos.'
            : 'Vas muy bien. Estos fundamentos se construyen paso a paso.'}
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <PixelText as="span" size="sm" color="var(--color-neon-yellow)">
          Q{currentIndex + 1}/{questions.length}
        </PixelText>
        <PixelText as="span" size="sm" color="var(--color-neon-green)">
          SCORE: {score}
        </PixelText>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className={styles.question}
        >
          <p className={styles.questionText}>{question.question}</p>

          <div className={styles.options}>
            {question.options.map((opt) => {
              let optionClass = styles.option;
              if (result) {
                if (opt.id === question.correctOptionId) optionClass += ` ${styles.correct}`;
                else if (opt.id === result.selectedOptionId) optionClass += ` ${styles.wrong}`;
              }

              return (
                <button
                  key={opt.id}
                  className={optionClass}
                  onClick={() => handleSelect(opt.id)}
                  disabled={!!result}
                >
                  <span className={styles.optionId}>{opt.id.toUpperCase()}</span>
                  {opt.text}
                </button>
              );
            })}
          </div>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.feedback}
            >
              <PixelText as="span" size="sm" color={result.isCorrect ? 'var(--color-neon-green)' : 'var(--color-neon-red)'} glow>
                {result.isCorrect ? '✓ BIEN VISTO' : '✗ Casi, vamos a por la siguiente'}
              </PixelText>
              <p className={styles.explanation}>{question.explanation}</p>
              <button className={styles.nextBtn} onClick={handleNext}>
                {currentIndex < questions.length - 1 ? 'NEXT →' : 'RESULTS'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
