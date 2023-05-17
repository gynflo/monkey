import { CallToActionView } from "@/ui/design-system/Call-to-action/call-to-action.view";
import { CoderMonkeySlackView } from "./components/coders-monkey-slack/Coder-monkey-slack.view";
import { CurrentCourseCtaView } from "./components/current-course/current-course-cta.view";
import { FeaturedView } from "./components/featured/Featured.view";
import { HeroTopView } from "./components/hero-top/Hero-top-view";
import { HighLightListView } from "./components/highLigt-list/highLighList.view";

export function LandingPageView() {
  return (
    <>
      <HeroTopView />
      <FeaturedView />
      <CoderMonkeySlackView />
      <CurrentCourseCtaView />
      <HighLightListView/>
      <CallToActionView/>
    </>
  );
}
