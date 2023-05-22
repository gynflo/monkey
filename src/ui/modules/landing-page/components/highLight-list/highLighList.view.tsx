import { Container } from "@/ui/components";
import { Button, Typography } from "@/ui/design-system";
import Image from "next/image";
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri";

export function HighLightListView() {
  return (
    <Container className="py-24 space-y-10">
      <div className="flex justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image
            fill
            src={"assets/svg/cake.svg"}
            alt="Illustration d'un gateau"
          />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            De novice à développeur en un clin d&apos;œil !
          </Typography>
          <div className="space-y-3">
            <ListPoint>Progresse rapidement.</ListPoint>
            <ListPoint>Inspire-toi.</ListPoint>
            <ListPoint>Gagne de l’assurance.</ListPoint>
          </div>
          <div className="relative inline-block">
            <Button
              baseUrl="/connexion/inscription"
              icon={{ icon: RiArrowRightLine }}
            >
              Let&apos;go
            </Button>
            <Image
              src={"/assets/svg/mouse.svg"}
              alt="Illustration d'un flêche de souris"
              className="absolute right-7 -bottom-5"
              width={25}
              height={27}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image
            fill
            src={"assets/svg/toupie.svg"}
            alt="Illustration d'un gateau"
          />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            Booste ta carrière de développeur
          </Typography>
          <div className="space-y-3">
            <ListPoint>Partage tes feedbacks.</ListPoint>
            <ListPoint>Connecte-toi, élargis ton réseau pro!</ListPoint>
            <ListPoint>Reste inspiré, motivé avec notre communauté.</ListPoint>
          </div>
          <div className="relative inline-block">
            <Button
              baseUrl="/connexion/inscription"
              icon={{ icon: RiArrowRightLine }}
              variant="secondary"
            >
              Démarrer
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

interface ListPointProps {
  children: React.ReactNode;
}

function ListPoint({ children }: ListPointProps) {
  return (
    <div className="flex items-start gap-2">
      <RiCheckboxCircleLine size={24} className="mt-0.5 text-secondary" />
      <Typography variant="body-lg" component="span">
        {children}
      </Typography>
    </div>
  );
}
