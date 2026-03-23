import { motion } from 'framer-motion';
import { PixelText } from '../PixelText/PixelText';
import styles from './SkillTree.module.css';

interface Skill {
  name: string;
  icon: string;
  color: string;
  description: string;
}

const SKILLS: Skill[] = [
  { name: 'Arquitectura', icon: '🏗️', color: 'var(--color-neon-cyan)', description: 'Separar responsabilidades, hexagonal, clean code' },
  { name: 'Testing', icon: '🧪', color: 'var(--color-neon-green)', description: 'Unit, integration, e2e. Código sin tests = código temporal' },
  { name: 'JS/TS Core', icon: '⚡', color: 'var(--color-neon-yellow)', description: 'Closures, event loop, prototipos, coerción' },
  { name: 'Patrones', icon: '🧩', color: 'var(--color-neon-magenta)', description: 'Observer, Strategy, Factory... no reinventes la rueda' },
  { name: 'Accesibilidad', icon: '♿', color: 'var(--color-neon-cyan)', description: 'HTML semántico, ARIA, navegación por teclado' },
  { name: 'Git / CI-CD', icon: '🔀', color: 'var(--color-neon-green)', description: 'Branching, code review, pipelines, deploys' },
];

export const SkillTree: React.FC = () => (
  <div className={styles.tree}>
    {SKILLS.map((skill, i) => (
      <motion.div
        key={skill.name}
        className={styles.node}
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1, duration: 0.4 }}
      >
        <div className={styles.icon} style={{ borderColor: skill.color, boxShadow: `0 0 12px ${skill.color}` }}>
          {skill.icon}
        </div>
        <PixelText as="span" size="sm" color={skill.color}>
          {skill.name}
        </PixelText>
        <p className={styles.desc}>{skill.description}</p>
      </motion.div>
    ))}
  </div>
);
