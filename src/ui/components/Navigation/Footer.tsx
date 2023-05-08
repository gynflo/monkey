import { v4 as uuidv4 } from "uuid";

import { Typography } from "@/ui/design-system";
import { Container } from "../Container/container";
import Image from "next/image";

import { footerLinks } from "@/ui/components/Navigation/app_links";
import { ActiveLink } from "./Active-link";
import { FooterLinks } from "@/types";

import { linkTypes } from "@/lib";

interface Props {}
export function FooterComponent({}: Props) {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerLinks.map((footerLink) => (
    <FooterLink key={uuidv4()} data={footerLink} />
  ));

  return (
    <footer className="bg-gray">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center gap-1">
          <Typography
            variant="caption1"
            theme="white"
            className="font-semibold"
          >
            Formations gratuites
          </Typography>
          <Typography variant="caption2" theme="gray">
            Abonne-toi à la chaîne !
          </Typography>
          <a href="https://youtube.com" target="_blank">
            <Image
              alt="Imaage Youtube"
              src="/assets/svg/YTB.svg"
              width={230}
              height={216}
            />
          </a>
        </div>
        <div className="flex gap-7">{footerNavigationList}</div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography variant="caption2" theme="gray">
            Copyright © {currentYear} |{" "}
            <a href="https://gynflo.site" target="_blank">
              Propulsed by Florian Ginet - CODERS monkey Auto-entrepreneur
            </a>
          </Typography>
          <div className=""></div>
        </div>
      </Container>
    </footer>
  );
}

/* Composant des liens dans le Footer */
interface FooterLinkProps {
  data: FooterLinks;
}

function FooterLink({ data }: FooterLinkProps) {
  const footerComponentList = data.links.map((objElement) => (
    <div key={uuidv4()}>
      {objElement.typeLink === linkTypes.INTERNAL && (
        <ActiveLink href={objElement.baseUrl}>{objElement.label}</ActiveLink>
      )}
      {objElement.typeLink === linkTypes.EXTERNAL && (
        <a href={objElement.baseUrl} target="_blank">
          {objElement.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="w-min-[190px]">
      <Typography variant="caption1" theme="white" className="pb-5">
        {data.label}
      </Typography>
      <Typography variant="caption2" theme="gray" className="space-y-4">
        {footerComponentList}
      </Typography>
    </div>
  );
}
