'use client';

import { useState } from "react";
import Image from "next/image";
import StepDot from "../carousel/StepDot";

const BannerUser = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      image: '/illustrations/mobile-app.svg',
      title: "Create a community",
      subtitle: "With pet lovers",
      greeting: "Hello, Eris 👋🏼"
    },
    {
      image: '/illustrations/medical-care.svg',
      title: "Find trusted care",
      subtitle: "For your best friend",
      greeting: "Need help? 🏥"
    },
    {
      image: '/illustrations/game-day.svg',
      title: "Enjoy fun activities",
      subtitle: "With furry companions", 
      greeting: "Let's play! 🎾"
    },
    {
      image: '/illustrations/dog-walking.svg',
      title: "Connect with walkers",
      subtitle: "Near your location",
      greeting: "Ready to walk? 🐕"
    }
  ];

  const currentStep = steps[activeStep];

  return (
    <div className="w-full rounded-lg bg-[#56cec82d] mt-10 p-5 2xl:p-8 relative h-96">
      <div className="w-2/3 h-full relative flex flex-col">
        <h4 className="text-2xl pb-4 font-light capitalize">{currentStep.greeting}</h4>
        <p className="text-5xl pb-4 font-semibold">{currentStep.title}</p>
        <p className="text-5xl font-semibold">{currentStep.subtitle}</p>
        <div className="mt-auto self-start">
          <StepDot 
            steps={steps.length} 
            interval={8000} 
            activeStep={activeStep}
            onStepChange={setActiveStep}
          />
        </div>
      </div>
      <Image 
        src={currentStep.image} 
        width={360} 
        height={360} 
        className="absolute right-4 bottom-0 transition-all duration-500 ease-in-out transform hover:scale-95" 
        alt={currentStep.title}
      />
    </div>
  );
};

export default BannerUser;