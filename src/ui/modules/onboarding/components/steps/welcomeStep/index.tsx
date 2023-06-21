import type { BaseComponentProps } from "@/types/onboarding_steps_list";
import { OnboardingFooter } from "../../onboardingFooter";

export function WelcomeStep({
  nextStep,
  isFirstStep,
  isFinalStep,
}: BaseComponentProps) {
  return (
    <div className="relative h-screen">
      Welcome Step Component
      <OnboardingFooter
        next={nextStep}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
      />
    </div>
  );
}
