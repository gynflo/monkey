import { AppLink, FooterLinks } from "@/types";
import { linkTypes } from "@/lib";

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
    baseUrl: "/#",
    typeLink: linkTypes.INTERNAL,
  },
  {
    label: "Inscription",
    baseUrl: "/#",
    typeLink: linkTypes.INTERNAL,
  },
  {
    label: "Mot de passe oublié",
    baseUrl: "/#",
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

 const footerSocialNetworkList: AppLink[] = [
  {
    label: "Youtube",
    baseUrl: "https://youtube.com",
    typeLink: linkTypes.EXTERNAL,
  },
  {
    label: "Linkedin",
    baseUrl: "https://linkedin.com",
    typeLink: linkTypes.EXTERNAL,
  },
  {
    label: "Slack",
    baseUrl: "/http://slack.com",
    typeLink: linkTypes.EXTERNAL,
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
