import { Seo, Layout } from "@/ui/components";
import { UserAccount } from "@/ui/modules/user-profile/user-account/user-account.container";
import { REGISTRED } from "@/lib";

export default function Connexion() {
  return (
    <>
      <Seo
        title="Mon espace"
        description="Description de ma page personnel"
      ></Seo>
      <Layout withSidebar sessionStatus={REGISTRED}>
        <UserAccount></UserAccount>
      </Layout>
    </>
  );
}
