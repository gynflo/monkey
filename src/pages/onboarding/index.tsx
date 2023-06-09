import { REGISTRED } from "@/lib";
import { Seo, Layout } from "@/ui/components";

export default function Onboarding() {
  return (
    <>
      <Seo
        title="onboarding"
        description="Description de lapage onboarding"
      ></Seo>
      <Layout sessionStatus={REGISTRED}>
        <div className="flex items-center justify-center pt-20 py-40">
          Welcome to onboarding
        </div>
      </Layout>
    </>
  );
}
