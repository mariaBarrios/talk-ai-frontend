export interface TimelineEvent {
  id: string;
  year: number;
  label: string;
  tech: string;
  description: string;
  spriteVariant: SpriteVariant;
}

export const SPRITE_VARIANTS = ['rookie', 'frontend', 'fullstack', 'ai-enhanced'] as const;
export type SpriteVariant = typeof SPRITE_VARIANTS[number];
