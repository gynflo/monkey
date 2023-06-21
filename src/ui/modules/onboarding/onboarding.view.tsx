import { BaseComponentProps } from "@/types/onboarding_steps_list";

export function OnboardingView({
  getCurrentStep,
  nextStep,
  prevStep,
  isFinalStep,
  isFirstStep,
  stepsList,
}: BaseComponentProps) {
  if (getCurrentStep()?.component) {
    const Component = getCurrentStep()?.component.step;
    return (
      <>
        {Component && (
          <Component
            getCurrentStep={getCurrentStep}
            nextStep={nextStep}
            prevStep={prevStep}
            isFinalStep={isFinalStep}
            isFirstStep={isFirstStep}
            stepsList={stepsList}
          />
        )}
      </>
    );
  }

  return null;
}
