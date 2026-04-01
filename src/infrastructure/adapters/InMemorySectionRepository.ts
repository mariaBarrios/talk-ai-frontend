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
        content: [],
      },
      {
        id: 'realworld',
        level: 2,
        title: 'DIFFICULTY: HARD',
        subtitle: 'El mundo real se aprende en equipo',
        content: [
          {
            type: 'text',
            value: 'Las empresas valoran a quien entiende el codigo, lo explica en una code review y puede resolver bugs con serenidad cuando toca.',
            highlight: true,
          },
          {
            type: 'quote',
            value: 'En mi equipo, cada linea pasa por una Pull Request revisada por 2-3 personas. Cuando explicas el POR QUE de tus decisiones, el trabajo gana calidad.',
          },
          {
            type: 'interaction',
            prompt: '¿Que te da mas seguridad cuando algo falla: copiar una solucion o entenderla de verdad?',
          },
        ],
      },
      {
        id: 'competence-trap',
        level: 3,
        title: 'TRAP!',
        subtitle: 'La ilusion de dominar demasiado pronto',
        content: [
          {
            type: 'quote',
            value: 'Usar calculadora ayuda mucho, y entender matematicas te da libertad. Con IA pasa igual: la herramienta suma, y tu criterio marca la diferencia.',
          },
          {
            type: 'list',
            items: [
              '¿Como anadiriamos tests?',
              '¿Que pasa si el usuario mete HTML en el input?',
              '¿Es accesible para alguien con lector de pantalla?',
              '¿Se puede mantener si hay que anadir 5 campos mas?',
            ],
          },
          {
            type: 'text',
            value: 'La IA acelera el inicio. El siguiente paso es transformar ese impulso en criterio, practica y confianza real.',
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
            value: 'Entender el event loop te da mucha ventaja para depurar uno de los bugs mas frecuentes en JavaScript.',
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
        subtitle: 'Cómo uso la IA en equipos de producto reales',
        content: [
          {
            type: 'quote',
            value: 'La IA me ayuda mucho, y la experiencia me ayuda a validar mejor cada respuesta. Ese criterio se entrena practicando.',
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
            value: 'La IA es un multiplicador. Cuanto mas crece tu base, mas valor obtienes de ella.',
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
            value: 'Cuando la IA te de una solucion, preguntate: ¿podria yo haber llegado a esto? Si aun no, tienes una gran oportunidad para aprender.',
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
            value: 'Estais en un gran momento para empezar. Teneis herramientas increibles, y con criterio pueden llevaros muy lejos.',
            highlight: true,
          },
          {
            type: 'quote',
            value: 'Esta semana, elegid algo que os haya generado la IA y repasadlo con calma. Entender cada linea ya es un gran paso.',
          },
          {
            type: 'text',
            value: 'No os quedeis solo en usar IA: aprended tambien a guiarla y hacerla vuestra.',
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
        explanation: 'Es uno de los bugs mas antiguos de JavaScript. typeof null === "object" desde 1995. Entender estos detalles te da una base muy solida.',
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
        explanation: 'Coercion de tipos: 1 + "2" = "12", luego "12" + 3 = "123". Dominar esto te ayuda a usar mejor cualquier codigo generado por IA.',
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
        explanation: 'Cada atajo se acumula con el tiempo. Si invertimos en calidad desde el inicio, el proyecto crece de forma mas sostenible.',
      },
    ];
  }
}
