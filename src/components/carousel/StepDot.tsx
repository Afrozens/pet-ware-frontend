'use client';

import { useState, useEffect } from 'react';

interface StepDotProps {
  steps?: number;
  activeStep?: number;
  autoPlay?: boolean;
  interval?: number;
  onStepChange?: (step: number) => void;
  className?: string;
}

const StepDot = ({ 
  steps = 3, 
  activeStep: externalActiveStep, 
  autoPlay = true, 
  interval = 6000,
  onStepChange,
  className = '' 
}: StepDotProps) => {
  const [internalActiveStep, setInternalActiveStep] = useState(0);
  const activeStep = externalActiveStep !== undefined ? externalActiveStep : internalActiveStep;

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      const nextStep = (activeStep + 1) % steps;
      if (externalActiveStep === undefined) {
        setInternalActiveStep(nextStep);
      }
      onStepChange?.(nextStep);
    }, interval);

    return () => clearInterval(timer);
  }, [activeStep, steps, autoPlay, interval, onStepChange, externalActiveStep]);

  const handleDotClick = (index: number) => {
    if (externalActiveStep === undefined) {
      setInternalActiveStep(index);
    }
    onStepChange?.(index);
  };

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {Array.from({ length: steps }, (_, index) => (
        <button
          key={index}
          onClick={() => handleDotClick(index)}
            className={`
            transition-all duration-300 cursor-pointer ease-out
            border-2 
            ${index === activeStep 
              ? 'bg-gradient-to-r from-purple-400 to-purple-500 w-8 rounded-lg border-purple-300 shadow-lg shadow-purple-400/30' 
              : 'bg-gradient-to-b from-purple-200 to-purple-300 border-purple-100 w-3 rounded-full hover:from-purple-300 hover:to-purple-400'
            }
            h-3
            focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50
            hover:scale-110
            transform
          `}
          aria-label={`Go to step ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default StepDot;