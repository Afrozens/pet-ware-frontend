'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FlipBoxProps {
  front: ReactNode; 
  back: ReactNode;  
  duration?: number; 
  delay?: number;    
}

const FlipBox = ({ front, back, duration = 0.8, delay = 0 }: FlipBoxProps) => {
  return (
    <div className="w-16 h-16 [perspective:1000px]">
      <motion.div
        className="relative w-full h-full"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 180 }}
        transition={{ duration, delay, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >

        <div className="absolute inset-0 flex items-center justify-center w-full h-full rounded-xl border border-gray-300 bg-white shadow-sm [backface-visibility:hidden]">
          {front}
        </div>

        <div className="absolute inset-0 flex items-center justify-center w-full h-full rounded-xl border border-gray-300 bg-white shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </div>
      </motion.div>
    </div>
  );
};

export default FlipBox;
