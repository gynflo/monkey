import { REGISTRED } from "@/lib";
import { Seo } from "@/ui/components";
import { Session } from "@/ui/components/session";
import { OnboardingContainer } from "@/ui/modules/onboarding/onboarding.container";

export default function Onboarding() {
  return (
    <>
      <Seo title="onboarding" description="Description de lapage onboarding" />
      <Session sessionStatus={REGISTRED}>
        <OnboardingContainer></OnboardingContainer>
      </Session>
    </>
  );
}
