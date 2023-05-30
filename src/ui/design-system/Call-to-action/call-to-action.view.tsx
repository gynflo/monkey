import { Container } from "@/ui/components";
import { Typography } from "../Typography/Typography";
import { Button } from "../Button";
import { linkTypes } from "@/lib";
import Image from "next/image";

export function CallToActionView() {
  return (
    <div className="relative overflow-hidden bg-primary">
      <Container className="py-20">
        <div className="relative z-10 max-w-3xl space-y-5">
          <Typography variant="h2" component="h2" theme="white">
            N&apos;attends pas pour développer tes compétences...
          </Typography>
          <div>
            <Button variant="success" baseUrl="#" linkType={linkTypes.EXTERNAL}>
              Formation React.js gratuite
            </Button>
          </div>
        </div>
        <div>
          <Image
            alt="Illustration d'une bombe sur le point d'exploser"
            width={1210}
            height={1210}
            src={"/assets/svg/bomb.svg"}
            className="absolute -bottom-[490px] -right-[250px]"
          />
        </div>
      </Container>
    </div>
  );
}
