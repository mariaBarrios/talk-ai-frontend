/**
 * ============================================================
 *  EJEMPLO DE ANTI-PATRÓN — NO USAR EN PRODUCCIÓN
 *
 *  Este archivo existe para ilustrar cómo quedaría esta misma
 *  funcionalidad si lo hubieras generado con IA sin criterio
 *  arquitectónico. Compáralo con la versión real del proyecto.
 * ============================================================
 */

import { useState, useEffect } from 'react';

export const FundamentalsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [highScore, setHighScore] = useState(0);

  // --- PROBLEMA 1: Datos hardcodeados dentro del componente ---
  // Si quieres cambiar las preguntas, tienes que tocar la UI.
  // Si quieres reutilizar las preguntas en otro sitio, no puedes.
  const questions = [
    {
      id: 'q1',
      question: '¿Qué devuelve typeof null en JavaScript?',
      options: [
        { id: 'a', text: '"null"' },
        { id: 'b', text: '"object"' },
        { id: 'c', text: '"undefined"' },
      ],
      correct: 'b',
      explanation: 'Es un bug histórico de JavaScript que nunca se corrigió.',
    },
    {
      id: 'q2',
      question: '¿Cuál es el resultado de 0.1 + 0.2 === 0.3?',
      options: [
        { id: 'a', text: 'true' },
        { id: 'b', text: 'false' },
      ],
      correct: 'b',
      explanation: 'IEEE 754 floating point. Devuelve 0.30000000000000004.',
    },
    {
      id: 'q3',
      question: '¿Qué imprime [1,2,3].map(parseInt)?',
      options: [
        { id: 'a', text: '[1, 2, 3]' },
        { id: 'b', text: '[1, NaN, NaN]' },
      ],
      correct: 'b',
      explanation: 'parseInt recibe (valor, radix). map le pasa (elemento, índice).',
    },
  ];

  // --- PROBLEMA 2: Acceso directo a localStorage en el componente ---
  // Si mañana quieres guardar en una API o en sessionStorage, tienes
  // que reescribir el componente. No puedes testear sin mockear globals.
  useEffect(() => {
    const saved = localStorage.getItem('quiz-high-score');
    if (saved) setHighScore(Number(saved));
  }, []);

  useEffect(() => {
    if (finished && score > highScore) {
      setHighScore(score);
      localStorage.setItem('quiz-high-score', String(score));
    }
  }, [finished, score, highScore]);

  // --- PROBLEMA 3: Lógica de negocio mezclada con el handler de UI ---
  // La regla "comparar respuesta seleccionada con la correcta" está
  // incrustada aquí. No puedes testearla sin renderizar el componente.
  const handleSelect = (optionId: string) => {
    if (selected) return;
    setSelected(optionId);
    if (optionId === questions[currentIndex].correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  // --- PROBLEMA 4: Estilos inline por todas partes ---
  // Ni CSS Modules, ni tokens de diseño, ni reutilización posible.
  // Cambiar el color del tema implica buscar en 200 sitios.
  if (finished) {
    return (
      <section style={{ padding: '2rem', background: '#1a1a2e', color: '#0f0' }}>
        <h2 style={{ fontFamily: '"Press Start 2P"', fontSize: '1.2rem', color: '#ffe66d' }}>
          SCORE: {score}/{questions.length}
        </h2>
        <p style={{ marginTop: '1rem', color: '#b0b0b0' }}>
          {score === questions.length
            ? '¡Perfecto! Tienes buen nivel de fundamentos.'
            : 'Estos son los fundamentos que la IA no te va a enseñar. ¡A estudiar!'}
        </p>
        <p style={{ marginTop: '0.5rem', color: '#777' }}>
          High score: {highScore}/{questions.length}
        </p>
      </section>
    );
  }

  const q = questions[currentIndex];

  return (
    <section style={{ padding: '2rem', background: '#1a1a2e', color: '#e0e0e0' }}>
      <h2 style={{ fontFamily: '"Press Start 2P"', fontSize: '1.2rem', color: '#ffe66d' }}>
        BOSS FIGHT: QUIZ DE FUNDAMENTOS
      </h2>

      {/* --- PROBLEMA 5: Todo el markup conoce la forma interna de los datos ---
          Si cambia la estructura de una pregunta, hay que tocar el HTML. */}
      <div style={{ marginTop: '1rem' }}>
        <span style={{ color: '#ffe66d', fontFamily: '"Press Start 2P"', fontSize: '0.7rem' }}>
          Q{currentIndex + 1}/{questions.length}
        </span>
        <span style={{ marginLeft: '1rem', color: '#0f0', fontFamily: '"Press Start 2P"', fontSize: '0.7rem' }}>
          SCORE: {score}
        </span>
      </div>

      <p style={{ marginTop: '1rem', fontSize: '1rem' }}>{q.question}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
        {q.options.map((opt) => (
          <button
            key={opt.id}
            disabled={!!selected}
            onClick={() => handleSelect(opt.id)}
            style={{
              padding: '0.75rem',
              background: selected
                ? opt.id === q.correct
                  ? '#2a9d3a'
                  : opt.id === selected
                    ? '#c0392b'
                    : '#2a2a4a'
                : '#2a2a4a',
              color: '#e0e0e0',
              border: '2px solid #444',
              cursor: selected ? 'default' : 'pointer',
              textAlign: 'left',
              fontFamily: 'inherit',
            }}
          >
            <strong>{opt.id.toUpperCase()}.</strong> {opt.text}
          </button>
        ))}
      </div>

      {selected && (
        <div style={{ marginTop: '1rem' }}>
          <p style={{
            color: selected === q.correct ? '#0f0' : '#f00',
            fontFamily: '"Press Start 2P"',
            fontSize: '0.8rem'
          }}>
            {selected === q.correct ? '✓ CORRECT!' : '✗ WRONG!'}
          </p>
          <p style={{ color: '#b0b0b0', marginTop: '0.5rem' }}>{q.explanation}</p>
          <button
            onClick={handleNext}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              background: '#ffe66d',
              color: '#000',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Press Start 2P"',
              fontSize: '0.7rem',
            }}
          >
            {currentIndex < questions.length - 1 ? 'NEXT →' : 'RESULTS'}
          </button>
        </div>
      )}
    </section>
  );
};
