import { LinkType } from "@/lib";
import { IconType } from "react-icons";

export interface AppLink {
  label: string;
  baseUrl: string;
  typeLink: LinkType;
  icon?: IconType;
}

export interface FooterLinks {
  label: String;
  links: AppLink[];
}
