import { Container } from "@/ui/components";
import { Button, Typography } from "@/ui/design-system";
import Image from "next/image";

export function HeroTopView() {
  return (
    <Container className="relative pt-40 pb-52 overflow-hidden">
      <div className="w-full max-w-2xl space-y-5">
        <Typography variant="h1" component="h1" className="max-w-lg">
          Rejoins les singes codeurs !
        </Typography>
        <Typography
          variant="body-lg"
          component="p"
          theme="gray"
          className="maw-lg-xl"
        >
          Ici, on se prend pas la tête, mais on code comme des bêtes ! Rejoins
          notre tribu de singes codeurs, partage tes projets les plus fous et
          fais-toi de nouveaux amis développeurs.
        </Typography>
        <div className="space-x-5 pt-2.5">
          <Button baseUrl="/connexion/inscription">Commencer</Button>
          <Button baseUrl="#" variant="secondary">
            En savoir plus
          </Button>
        </div>
      </div>
      <Image
        className="absolute top-0 right-0 z-0"
        src="/assets/svg/Illustration.svg"
        alt="Image d'une fusée décollant vers de nouveau cieux"
        height={596}
        width={811}
      />
    </Container>
  );
}
