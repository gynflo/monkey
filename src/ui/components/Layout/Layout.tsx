import { FooterComponent } from "../Navigation/Footer";
import { Navigation } from "../Navigation/Navigation";
import { Breadcrumbs } from "../breadcrumbs/bredcrumbs";

interface LayoutProps {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
}

export function Layout({ children, isDisplayBreadcrumbs = true }: LayoutProps) {
  return (
    <>
      <Navigation />
      {isDisplayBreadcrumbs && <Breadcrumbs />}
      {children}
      <FooterComponent />
    </>
  );
}
