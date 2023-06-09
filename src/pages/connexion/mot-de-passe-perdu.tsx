import { GUEST } from "@/lib";
import { Seo, Layout } from "@/ui/components";
import { ForgetPasswordContainer } from "@/ui/modules/authentication/forget-password/forget-password.container";

export default function ForgetPassword() {
  return (
    <>
      <Seo
        title="Mot de passe oublié"
        description="Page De Mot de passe oublié"
      ></Seo>
      <Layout sessionStatus={GUEST}>
        <ForgetPasswordContainer></ForgetPasswordContainer>
      </Layout>
    </>
  );
}
