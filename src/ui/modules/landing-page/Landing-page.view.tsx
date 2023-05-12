import { FeaturedView } from "./components/featured/Featured.view";
import { HeroTopView } from "./components/hero-top/Hero-top-view";

export function LandingPageView() {
  return (
    <>
      <HeroTopView />
      <FeaturedView />
    </>
  );
}
