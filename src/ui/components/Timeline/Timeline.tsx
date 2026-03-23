import { motion } from 'framer-motion';
import type { TimelineEvent } from '../../../domain/models/TimelineEvent';
import type { SpriteName } from '../PixelSprite/PixelSprite';
import { PixelSprite } from '../PixelSprite/PixelSprite';
import { PixelText } from '../PixelText/PixelText';
import styles from './Timeline.module.css';

interface Props {
  events: TimelineEvent[];
}

const SPRITE_COLORS: Record<string, string> = {
  rookie: 'var(--color-text-dim)',
  frontend: 'var(--color-neon-cyan)',
  fullstack: 'var(--color-neon-green)',
  'ai-enhanced': 'var(--color-neon-magenta)',
};

const SPRITE_NAMES: Record<string, SpriteName> = {
  rookie: 'sword',
  frontend: 'shield',
  fullstack: 'dual-swords',
  'ai-enhanced': 'rocket',
};

export const Timeline: React.FC<Props> = ({ events }) => (
  <div className={styles.timeline}>
    <div className={styles.line} />
    {events.map((event, i) => (
      <motion.div
        key={event.id}
        className={styles.node}
        initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.15 }}
      >
        <div
          className={styles.dot}
          style={{ borderColor: SPRITE_COLORS[event.spriteVariant], boxShadow: `0 0 12px ${SPRITE_COLORS[event.spriteVariant]}` }}
        >
          <PixelSprite name={SPRITE_NAMES[event.spriteVariant]} size={24} color={SPRITE_COLORS[event.spriteVariant]} />
        </div>
        <div className={styles.card}>
          <PixelText as="span" size="sm" color="var(--color-neon-yellow)">
            {event.year}
          </PixelText>
          <PixelText as="h3" size="sm" color={SPRITE_COLORS[event.spriteVariant]}>
            {event.label}
          </PixelText>
          <span className={styles.tech}>{event.tech}</span>
          <p className={styles.desc}>{event.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
);
