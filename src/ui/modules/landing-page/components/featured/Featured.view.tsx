import { Container } from "@/ui/components";
import { SocialNetworksButtons } from "@/ui/components/Navigation/Social-networks-button";
import { Button, Typography } from "@/ui/design-system";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidV4 } from "uuid";

interface featureListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
}

const featureDatas: featureListInterface[] = [
  {
    imagePath: "/assets/svg/floppy.svg",
    imageAlt: "ancienne disquete d'ordinateur",
    title: "Ressources",
    description: "Consulte et partage des ressources pour les devs",
  },
  {
    imagePath: "/assets/svg/gamepad.svg",
    imageAlt: "Manette de jeu",
    title: "Entrainement",
    description: "Entraîne-toi à devenir meilleur et trouve de l’inspiration",
  },
  {
    imagePath: "/assets/svg/speaker.svg",
    imageAlt: "enceinte",
    title: "Visibilité",
    description: "Expose tes projets et crée toi des opportunités !",
  },
  {
    imagePath: "/assets/svg/compass.svg",
    imageAlt: "compas",
    title: "Relations",
    description: "Connecte-toi avec des devs web et booste ta carrière !",
  },
];

export const FeaturedView = () => {
  const featuredList = featureDatas.map((feature) => (
    <div
      key={uuidV4()}
      className="flex flex-col items-center justify-center bg-white rounded p-7"
    >
      <div className=" relative w-[130px] h-[130px] rounded-full mb-6 p-10 bg-gray-400 overflow-hidden">
        <Image
          src={feature.imagePath}
          alt={feature.imageAlt}
          fill
          className="object-scale-down blur-2xl"
        />
        <Image
          src={feature.imagePath}
          alt={feature.imageAlt}
          fill
          className="object-scale-down"
        />
      </div>
      <Typography variant="lead" component="h3" className="font-medium mb-2.5">
        {feature.title}
      </Typography>
      <Typography
        variant="body-base"
        component="p"
        theme="gray"
        className="text-center"
      >
        {feature.description}
      </Typography>
    </div>
  ));

  return (
    <div className="bg-gray-300">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className="grid grid-cols-2 gap-7 col-span-7">{featuredList}</div>
        <div className="col-span-5 flex flex-col justify-between">
          <div>
            <Typography variant="h2" component="h2" className="mb-5">
              L’endroit le plus cool pour devenir développeur
            </Typography>
            <Typography
              variant="body-lg"
              component="p"
              className="mb-8"
              theme="gray"
            >
              Du partage, des connexions et des formations notre app gère tout
              ça pour toi. Rejoins la communauté et grimpe en grade. Let&apos;s
              go !
            </Typography>
            <Button
              variant="secondary"
              baseUrl="#"
              icon={{ icon: RiArrowRightLine }}
            >
              Commencer
            </Button>
          </div>
          <div>
            <Typography
              variant="caption3"
              component="div"
              theme="gray"
              className="mb-4"
            >
              Nos réseaux sociaux
            </Typography>
            <SocialNetworksButtons />
          </div>
        </div>
      </Container>
    </div>
  );
};
