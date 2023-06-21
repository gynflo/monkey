import { useState } from "react";
import { OnboardingView } from "./onboarding.view";

//Step Component
import { WelcomeStep } from "./components/steps/welcomeStep";
import { ProfileStep } from "./components/steps/profileStep";
// Type
import type { OnboardingStepsListInterface } from "@/types/onboarding_steps_list";

export function OnboardingContainer() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const stepsList: OnboardingStepsListInterface[] = [
    {
      id: 1,
      label: "Bienvenue",
      component: {
        step: WelcomeStep,
      },
    },
    {
      id: 2,
      label: "Profile",
      component: {
        step: ProfileStep,
      },
    },
  ];

  function getCurrentStep() {
    return stepsList.find((step) => step.id === currentStep);
  }

  function nextStep() {
    if (currentStep < stepsList.length) {
      setCurrentStep(currentStep + 1);
    }
  }

  function prevStep() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  function isFirstStep() {
    if (currentStep === 1) {
      return true;
    }
    return false;
  }

  function isFinalStep() {
    if (currentStep === stepsList.length) {
      return true;
    }
    return false;
  }

  return (
    <OnboardingView
      getCurrentStep={getCurrentStep}
      nextStep={nextStep}
      prevStep={prevStep}
      isFinalStep={isFinalStep}
      isFirstStep={isFirstStep}
      stepsList={stepsList}
    />
  );
}
