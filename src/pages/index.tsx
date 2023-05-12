import { Seo, Layout } from "@/ui/components";
import { LandingPageContainer } from "@/ui/modules/landing-page";

export default function Home() {
  return (
    <>
      <Seo title="Gynflo Project" description="description"></Seo>
      <Layout>
        <LandingPageContainer />
      </Layout>
    </>
  );
}
