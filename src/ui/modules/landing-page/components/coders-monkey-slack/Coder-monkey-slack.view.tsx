import { linkTypes } from "@/lib";
import { Container } from "@/ui/components";
import { Button, Logo, Typography } from "@/ui/design-system";
import Image from "next/image";

export function CoderMonkeySlackView() {
  return (
    <Container className="flex justify-between">
      <div className="flex flex-col justify-center max-w-2xl space-y-5">
        <div className="flex items-center gap-2">
          <Logo size="very-small" />
          <Typography
            variant="caption2"
            component="span"
            className="font-medium"
          >
            Coders Monkey
          </Typography>
        </div>
        <Typography variant="h2" component="h2">
          Rejoins-nous sur le Slack des Singes codeurs
        </Typography>
        <Typography
          variant="body-lg"
          component="p"
          theme="gray"
          className="max-w-lg"
        >
          Rejoins-nous et obtiens de l’aide, des conseils et pourquoi pas des
          nouveaux potes !
        </Typography>
        <Button baseUrl="https://slack.com/intl/fr-fr" linkType={linkTypes.EXTERNAL}>Rejoindre le groupe d&apos;aide</Button>
      </div>
      <div className="relative w-[600px] h-[600px]">
        <Image
          src={"/assets/svg/logo-slack.svg"}
          alt="Illustration du Logo Slack"
          fill
        />
      </div>
    </Container>
  );
}
