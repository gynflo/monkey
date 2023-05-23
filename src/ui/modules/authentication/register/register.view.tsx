import { Container } from "@/ui/components";
import { Typography } from "@/ui/design-system";
import { Box } from "@/ui/design-system/Box";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "./register-form";
import type { FormsType } from "@/types/forms";

interface Props {
  form: FormsType;
}

export function RegisterView({ form }: Props) {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-20">
      <div className="flex items-center">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src={"/assets/images/character-1.png"}
            alt="Description de l'illustration"
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">
              Inscription
            </Typography>

            <div>
              <Typography variant="caption4" component="span" theme="gray">
                Tu as déja un compte ?
              </Typography>
              <Typography variant="caption4" component="span" theme="primary">
                <Link href={"/connexion"}>Connexion</Link>
              </Typography>
            </div>
          </div>
          <RegisterForm form={form} />
        </Box>
      </div>
    </Container>
  );
}
