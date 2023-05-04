import { v4 as uuidv4 } from "uuid";

import { Typography } from "@/ui/design-system";
import { Container } from "../Container/container";
import Image from "next/image";

import { footerAppList } from "@/ui/components/Navigation/app_links";
import { ActiveLink } from "./Active-link";

interface Props {}
export function FooterComponent({}: Props) {
  const currentYear = new Date().getFullYear();

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
        <div className="">
          <FooterLink></FooterLink>
        </div>
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

function FooterLink() {
  const footerComponentList = footerAppList.map((objElement) => (
    <div key={uuidv4()}>
      {objElement.typeLink === "internal" && (
        <ActiveLink href={objElement.baseUrl}>{objElement.label}</ActiveLink>
      )}
      {objElement.typeLink === "external" && (
        <a href={objElement.baseUrl}>{objElement.label}</a>
      )}
    </div>
  ));

  return (
    <div className="w-min-[190px]">
      <Typography variant="caption1" theme="white" className="pb-5">
        Titre
      </Typography>
      <Typography variant="caption2" theme="gray" className="space-y-4">
        {footerComponentList}
      </Typography>
    </div>
  );
}
