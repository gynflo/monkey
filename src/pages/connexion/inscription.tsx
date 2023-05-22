import { Seo, Layout } from "@/ui/components";
import { RegisterContainer } from "@/ui/modules/authentication/register/register.container";

export default function Register() {
  return (
    <>
      <Seo
        title="Inscription sur Coders Gynflo"
        description="Page d'inscription"
      ></Seo>
      <Layout>
        <RegisterContainer></RegisterContainer>
      </Layout>
    </>
  );
}
