import { useAuth } from "@/context/AuthUserProvider";
import { REGISTRED, GUEST } from "@/lib";
import type { SessionStatus } from "@/types";
import { ScreenSpinner } from "@/ui/design-system/Spinner";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
  sessionStatus?: SessionStatus;
}

export function Session({ children, sessionStatus }: Props) {
  const { authUser, authUserIsLoading } = useAuth();
  const router = useRouter();

  const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted;

  function shouldBeRedirectedOnboarding() {
    return (
      !authUserIsLoading &&
      authUser &&
      !onboardingIsCompleted &&
      router.asPath !== "/onboarding"
    );
  }

  function shouldNotBeRedirectedOnboarding() {
    return (
      !authUserIsLoading &&
      authUser &&
      onboardingIsCompleted &&
      router.asPath == "/onboarding"
    );
  }

  if (shouldBeRedirectedOnboarding()) {
    router.push("/onboarding");
    return <ScreenSpinner />;
  }

  if (shouldNotBeRedirectedOnboarding()) {
    router.push("/mon-espace");
    return <ScreenSpinner />;
  }
  
  if (sessionStatus === GUEST && !authUserIsLoading) {
    if (!authUser) {
      return <>{children}</>;
    } else {
      router.push("/mon-espace");
    }
  }

  if (sessionStatus === REGISTRED && !authUserIsLoading) {
    if (authUser) {
      return <>{children}</>;
    } else {
      router.push("/connexion");
    }
  }

  if (!sessionStatus && !authUserIsLoading) {
    return <>{children}</>;
  }

  return <ScreenSpinner />;
}
