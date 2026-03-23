import type { Section } from '../../domain/models/Section';
import type { TimelineEvent } from '../../domain/models/TimelineEvent';
import type { QuizQuestion } from '../../domain/models/QuizQuestion';
import type { SectionRepository } from '../../domain/ports/SectionRepository';

export class InMemorySectionRepository implements SectionRepository {
  getSections(): Section[] {
    return [
      {
        id: 'hero',
        level: 0,
        title: 'PRESS START',
        subtitle: 'Desarrollo Frontend en la Era de la IA',
        content: [
          {
            type: 'interaction',
            prompt: '¿Cuántos usáis ChatGPT o Copilot para hacer trabajos de la carrera?',
          },
          {
            type: 'interaction',
            prompt: '¿Y cuántos revisáis línea por línea lo que os genera?',
          },
        ],
      },
      {
        id: 'whoami',
        level: 1,
        title: 'SELECT YOUR CHARACTER',
        subtitle: '18 años de experiencia en 60 segundos',
        content: [
          {
            type: 'quote',
            value: 'He sobrevivido a 4 revoluciones tecnológicas. La IA es la 5ª. Y os cuento un secreto: las anteriores también iban a hacer que los programadores sobráramos.',
          },
        ],
      },
      {
        id: 'realworld',
        level: 2,
        title: 'DIFFICULTY: HARD',
        subtitle: 'El mundo real no tiene modo fácil',
        content: [
          {
            type: 'text',
            value: 'Las empresas no buscan a alguien que escriba código. Buscan a alguien que lo entienda, lo defienda en una code review y debuguee un bug en producción a las 8 de la tarde.',
            highlight: true,
          },
          {
            type: 'quote',
            value: 'En mi equipo, cada línea de código pasa por una Pull Request donde 2-3 personas la revisan. Si no sabes explicar POR QUÉ escribiste algo así, no pasa.',
          },
          {
            type: 'interaction',
            prompt: '¿Qué creéis que pasa cuando el código que no entendéis tiene un bug en producción y vuestro jefe os pregunta qué ha pasado?',
          },
        ],
      },
      {
        id: 'competence-trap',
        level: 3,
        title: 'TRAP!',
        subtitle: 'La trampa de la competencia aparente',
        content: [
          {
            type: 'quote',
            value: 'Saber usar una calculadora no te convierte en matemático. Saber usar Copilot no te convierte en developer.',
          },
          {
            type: 'list',
            items: [
              '¿Dónde están los tests?',
              '¿Qué pasa si el usuario mete HTML en el input?',
              '¿Es accesible para alguien con lector de pantalla?',
              '¿Se puede mantener si hay que añadir 5 campos más?',
            ],
          },
          {
            type: 'text',
            value: 'El efecto Dunning-Kruger amplificado: la IA te sube a la cima de "Mount Stupid" más rápido que nunca.',
            highlight: true,
          },
        ],
      },
      {
        id: 'fundamentals',
        level: 4,
        title: 'SKILL TREE',
        subtitle: 'Los fundamentos que no cambian',
        content: [
          {
            type: 'text',
            value: 'La web que estáis viendo ahora mismo está hecha con arquitectura hexagonal. Si mañana React desaparece, el 70% del código sigue valiendo.',
            highlight: true,
          },
          {
            type: 'quote',
            value: 'El código sin tests es código que funciona por casualidad.',
          },
          {
            type: 'quote',
            value: 'Si no sabes qué es el event loop, no vas a poder debuguear el bug más común de JavaScript.',
          },
          {
            type: 'text',
            value: 'El 15% de la población mundial tiene alguna discapacidad. Si tu web no es accesible, estás excluyendo a 1 de cada 7 personas.',
            highlight: true,
          },
        ],
      },
      {
        id: 'ai-experience',
        level: 5,
        title: 'POWER-UP',
        subtitle: 'Cómo uso la IA con 18 años de experiencia',
        content: [
          {
            type: 'quote',
            value: 'Yo le pido cosas a la IA y sé cuándo me está respondiendo bien y cuándo me está metiendo un gol. Vosotros... todavía no.',
          },
          {
            type: 'list',
            items: [
              '✅ Donde brilla: boilerplate, refactors mecánicos, exploración de APIs',
              '❌ Donde falla: decisiones de arquitectura, edge cases, contexto de negocio',
            ],
          },
          {
            type: 'quote',
            value: 'La IA es un multiplicador. Si multiplicas 0 × 1000, sigue siendo 0. Invertid en que el número base sea alto.',
          },
        ],
      },
      {
        id: 'mindset',
        level: 6,
        title: 'CONTINUE?',
        subtitle: 'Game Over vs New Game+',
        content: [
          {
            type: 'quote',
            value: 'Cuando la IA te dé una solución, pregúntate: ¿podría yo haber llegado a esto? Si la respuesta es no, tienes deberes.',
          },
          {
            type: 'text',
            value: 'La carrera es una maratón, no un sprint. La universidad es el calentamiento.',
            highlight: true,
          },
          {
            type: 'text',
            value: 'La tecnología cambia cada 3-5 años, pero los fundamentos llevan décadas.',
          },
        ],
      },
      {
        id: 'closing',
        level: 7,
        title: 'NEW GAME+',
        subtitle: 'El siguiente nivel empieza ahora',
        content: [
          {
            type: 'text',
            value: 'Estáis en el mejor momento posible para empezar. Tenéis herramientas que yo no tenía. Pero las herramientas sin criterio son peligrosas.',
            highlight: true,
          },
          {
            type: 'quote',
            value: 'Esta semana, coged algo que la IA os haya generado y reescribidlo desde cero. Entended cada línea. Ese es el primer paso.',
          },
          {
            type: 'text',
            value: 'No os conforméis con ser usuarios de IA. Sed los que la hacen funcionar.',
            highlight: true,
          },
        ],
      },
    ];
  }

  getTimelineEvents(): TimelineEvent[] {
    return [
      {
        id: 'abap',
        year: 2008,
        label: 'ABAP',
        tech: 'SAP',
        description: 'Donde todo empezó. Enterprise, corporativo, mainframes.',
        spriteVariant: 'rookie',
      },
      {
        id: 'frontend',
        year: 2015,
        label: 'Frontend',
        tech: 'Angular',
        description: 'El gran salto. Reciclaje completo a desarrollo web.',
        spriteVariant: 'frontend',
      },
      {
        id: 'react',
        year: 2018,
        label: 'React',
        tech: 'React + Gatsby + Next.js',
        description: 'Componentes, SSR, SSG. Clean code y testing.',
        spriteVariant: 'fullstack',
      },
      {
        id: 'ai',
        year: 2023,
        label: 'IA Era',
        tech: 'Copilot + Cursor',
        description: 'La IA como herramienta. No como sustituto.',
        spriteVariant: 'ai-enhanced',
      },
    ];
  }

  getQuizQuestions(): QuizQuestion[] {
    return [
      {
        id: 'q1',
        question: '¿Qué devuelve typeof null en JavaScript?',
        options: [
          { id: 'a', text: '"null"' },
          { id: 'b', text: '"object"' },
          { id: 'c', text: '"undefined"' },
          { id: 'd', text: 'Error' },
        ],
        correctOptionId: 'b',
        explanation: 'Es uno de los bugs más antiguos de JavaScript. typeof null === "object" desde 1995. La IA no te va a enseñar esto.',
      },
      {
        id: 'q2',
        question: '¿Qué imprime este código?\nconsole.log(1 + "2" + 3)',
        options: [
          { id: 'a', text: '6' },
          { id: 'b', text: '"123"' },
          { id: 'c', text: '"33"' },
          { id: 'd', text: 'NaN' },
        ],
        correctOptionId: 'b',
        explanation: 'Coerción de tipos: 1 + "2" = "12", luego "12" + 3 = "123". Si no dominas la coerción, copiar código de la IA es como conducir sin carnet.',
      },
      {
        id: 'q3',
        question: '¿Cuál NO es una buena práctica de accesibilidad?',
        options: [
          { id: 'a', text: 'Usar alt en imágenes' },
          { id: 'b', text: 'Usar divs para todo' },
          { id: 'c', text: 'Etiquetas semánticas HTML' },
          { id: 'd', text: 'Navegación con teclado' },
        ],
        correctOptionId: 'b',
        explanation: 'Los <div> no tienen significado semántico. Un lector de pantalla no sabe qué es un div. Usa <nav>, <main>, <article>, <button>.',
      },
      {
        id: 'q4',
        question: '¿Qué es la "deuda técnica"?',
        options: [
          { id: 'a', text: 'Dinero que debes al cliente' },
          { id: 'b', text: 'Código rápido hoy = problemas mañana' },
          { id: 'c', text: 'Un tipo de test' },
          { id: 'd', text: 'Un patrón de diseño' },
        ],
        correctOptionId: 'b',
        explanation: 'Cada atajo que tomas se acumula. Y adivina quién tiene que pagar esa deuda: tú, a las 8 de la tarde, con producción caída.',
      },
    ];
  }
}
