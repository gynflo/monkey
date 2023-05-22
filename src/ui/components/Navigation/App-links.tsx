import { AppLink, FooterLinks } from "@/types";
import { linkTypes } from "@/lib";
import {
  RiSlackFill,
  RiYoutubeFill,
  RiLinkedinFill,
} from "react-icons/ri";

const footerAppList: AppLink[] = [
  {
    label: "Accueil",
    baseUrl: "/",
    typeLink: linkTypes.INTERNAL,
  },
  {
    label: "Projets",
    baseUrl: "/#",
    typeLink: linkTypes.INTERNAL,
  },
  {
    label: "Coders Monkey",
    baseUrl: "/#",
    typeLink: linkTypes.INTERNAL,
  },
  {
    label: "Formations",
    baseUrl: "/#",
    typeLink: linkTypes.INTERNAL,
  },
];

const footerUsersList: AppLink[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    typeLink: linkTypes.INTERNAL,
  },
  {
    label: "Connexion",
    baseUrl: "/connexion",
    typeLink: linkTypes.INTERNAL,
  },
  {
    label: "Inscription",
    baseUrl: "/connexion/inscription",
    typeLink: linkTypes.INTERNAL,
  },
  {
    label: "Mot de passe oublié",
    baseUrl: "/connexion/mots-de-passe-perdus",
    typeLink: linkTypes.INTERNAL,
  },
];

const footerInfoList: AppLink[] = [
  {
    label: "CGU",
    baseUrl: "/#",
    typeLink: linkTypes.INTERNAL,
  },
  {
    label: "Confidentialité",
    baseUrl: "/#",
    typeLink: linkTypes.INTERNAL,
  },
  {
    label: "A propos",
    baseUrl: "/#",
    typeLink: linkTypes.INTERNAL,
  },
  {
    label: "Contact",
    baseUrl: "/#",
    typeLink: linkTypes.INTERNAL,
  },
];

export const footerSocialNetworkList: AppLink[] = [
  {
    label: "Youtube",
    baseUrl: "https://youtube.com",
    typeLink: linkTypes.EXTERNAL,
    icon: RiYoutubeFill,
  },
  {
    label: "Linkedin",
    baseUrl: "https://linkedin.com",
    typeLink: linkTypes.EXTERNAL,
    icon: RiLinkedinFill,
  },
  {
    label: "Slack",
    baseUrl: "/http://slack.com",
    typeLink: linkTypes.EXTERNAL,
    icon: RiSlackFill,
  },
];

export const footerLinks: FooterLinks[] = [
  {
    label: "App",
    links: footerAppList,
  },
  {
    label: "Utilisateurs",
    links: footerUsersList,
  },
  {
    label: "Informations",
    links: footerInfoList,
  },
  {
    label: "Réseaux",
    links: footerSocialNetworkList,
  },
];
