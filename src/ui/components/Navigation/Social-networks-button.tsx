import { Button } from "@/ui/design-system";
import { footerSocialNetworkList } from "./App-links";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import { RiQuestionMark } from "react-icons/ri";

interface Props {
  theme?: "gray" | "accent" | "secondary";
  className?: string;
}

export function SocialNetworksButtons({ className, theme = "accent" }: Props) {
  const iconButtonList = footerSocialNetworkList.map((elmt) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme={theme}
      icon={{ icon: elmt.icon ? elmt.icon : RiQuestionMark }}
      baseUrl={elmt.baseUrl}
      linkType={elmt.typeLink}
      
    />
  ));

  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {iconButtonList}
    </div>
  );
}
