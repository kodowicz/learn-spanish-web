import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';

type BackgroundProps = {
  children: React.ReactNode;
}

type ClickPosition = {
  id: string;
  x: number;
  y: number;
}

export function Background({ children }: BackgroundProps) {
  const [clickPositions, setClickPositions] = useState<Array<ClickPosition>>([]);

  const onBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e;

    const doesClickExist = clickPositions.some(position => position.x === clientX && position.y === clientY);

    if (doesClickExist) return;

    setClickPositions(prev => [...prev, {
      id: `${clientX}-${clientY}`,
      x: clientX,
      y: clientY
    }]);
  };

  const onClickAnimationFinish = useCallback((id: string) => {
    setClickPositions(prev => prev.filter(position => position.id !== id));
  }, [clickPositions]);

  return (
    <div className="bg-confetti h-full bg-contain bg-center bg-repeat" onClick={onBackgroundClick}>
      {clickPositions.map(position => (
        <ClickIndicator key={position.id} onFinish={() => onClickAnimationFinish(position.id)} x={position.x} y={position.y} />
      ))}
      {children}
    </div>
  );
}

type ClickIndicatorProps = {
  onFinish: () => void;
  x: number;
  y: number;
}

const INDICATOR_SIZE = 64;

function ClickIndicator({ onFinish, x ,y }: ClickIndicatorProps) {
  return (
    <motion.div
      className="absolute rounded-full bg-black"
      initial={{ 
        scale: 0.1,
        opacity: 0.3
      }}
      animate={{ 
        scale: 1,
        opacity: 0
      }}
      onAnimationComplete={onFinish}
      style={{ left: x - (INDICATOR_SIZE/2), top: y - (INDICATOR_SIZE/2), height:INDICATOR_SIZE, width: INDICATOR_SIZE }}
      transition={{ duration: 0.4 }}
    />
  );
};