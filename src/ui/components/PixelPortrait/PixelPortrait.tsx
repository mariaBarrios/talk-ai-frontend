import { useEffect, useRef } from 'react';
import styles from './PixelPortrait.module.css';

interface Props {
  src: string;
  alt: string;
  size?: number;
  pixelGrid?: number;
  className?: string;
}

export const PixelPortrait: React.FC<Props> = ({
  src,
  alt,
  size = 176,
  pixelGrid = 40,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const image = new Image();
    image.src = src;

    image.onload = () => {
      canvas.width = size;
      canvas.height = size;

      const side = Math.min(image.width, image.height);
      const sx = (image.width - side) / 2;
      const sy = (image.height - side) * 0.18;

      const tinyCanvas = document.createElement('canvas');
      tinyCanvas.width = pixelGrid;
      tinyCanvas.height = pixelGrid;
      const tinyCtx = tinyCanvas.getContext('2d');
      if (!tinyCtx) return;

      tinyCtx.drawImage(image, sx, Math.max(0, sy), side, side, 0, 0, pixelGrid, pixelGrid);

      ctx.clearRect(0, 0, size, size);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(tinyCanvas, 0, 0, pixelGrid, pixelGrid, 0, 0, size, size);
    };
  }, [pixelGrid, size, src]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={`${styles.canvas} ${className}`}
      aria-label={alt}
      role="img"
    />
  );
};
