export interface OnboardingStepsListInterface {
  id: number;
  label: string;
  component: {
    step: React.ComponentType<BaseComponentProps>;
  };
}

export interface BaseComponentProps {
  getCurrentStep: () => OnboardingStepsListInterface | undefined;
  nextStep: () => void;
  prevStep: () => void;
  isFinalStep: () => boolean;
  isFirstStep: () => boolean;
  stepsList: OnboardingStepsListInterface[];
}
