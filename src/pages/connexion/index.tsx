import { Seo, Layout } from "@/ui/components";
import { LoginContainer } from "@/ui/modules/authentication/login/login.container";

export default function Connexion() {
  return (
    <>
      <Seo
        title="Connexion sur Coders Gynflo"
        description="Page de Connexion au compte"
      ></Seo>
      <Layout>
        <LoginContainer></LoginContainer>
      </Layout>
    </>
  );
}
