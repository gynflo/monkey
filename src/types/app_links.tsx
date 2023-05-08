import { LinkType } from "@/lib";

export interface AppLink {
  label: string;
  baseUrl: string;
  typeLink: LinkType;
}

export interface FooterLinks {
  label: String;
  links: AppLink[];
}
