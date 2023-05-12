import { FooterComponent } from "../Navigation/Footer";
import { Navigation } from "../Navigation/Navigation";

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      {children}
      <FooterComponent />
    </>
  );
}
