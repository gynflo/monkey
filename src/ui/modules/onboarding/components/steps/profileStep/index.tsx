import { BaseComponentProps } from "@/types/onboarding_steps_list";
import { Button } from "@/ui/design-system/Button";

export function ProfileStep({ prevStep }: BaseComponentProps) {
  return (
    <>
      <h1>Profile step</h1>
      <Button action={prevStep}>Précedent</Button>
    </>
  );
}
