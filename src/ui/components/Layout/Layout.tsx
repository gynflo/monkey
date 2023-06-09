import { Container } from "../Container/container";
import {
  FooterComponent,
  Navigation,
  NavigationSidebarUserAccount,
} from "@/ui/components/Navigation";
import { Breadcrumbs } from "@/ui/components/breadcrumbs";
import {Session} from "../session";
import type { SessionStatus } from "@/types";

interface LayoutProps {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
  withSidebar?: boolean;
  sessionStatus?: SessionStatus;
}

export function Layout({
  children,
  isDisplayBreadcrumbs = true,
  withSidebar,
  sessionStatus,
}: LayoutProps) {
  let view: React.ReactElement = <></>;

  if (withSidebar) {
    view = (
      <Container className="mb-14">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3 ">
            <NavigationSidebarUserAccount />
          </div>
          <div className="col-span-9 ">{children}</div>
        </div>
      </Container>
    );
  } else {
    view = <>{children}</>;
  }
  return (
    <Session sessionStatus={sessionStatus}>
      <Navigation />
      {isDisplayBreadcrumbs && <Breadcrumbs />}
      {view}
      <FooterComponent />
    </Session>
  );
}
