import { Container, ActiveLink } from "@/ui/components";
import { Button, Logo, Typography } from "@/ui/design-system";


interface Props {}

export function Navigation({}: Props) {
  return (
    <>
      <nav className="border-b-2 border-gray-400">
        <Container className="flex items-center justify-between gap-7 py-1.5">
          <ActiveLink href="/">
            <div className="flex items-center gap-2.5">
              <Logo size="small"></Logo>
              <div>
                <div className="text-gray font-extrabold text-[24px]">
                  Coders Gynflo
                </div>
                <Typography
                  variant="caption4"
                  theme="gray"
                  component="span"
                  className="font-normal"
                >
                  Trouve de l’inspiration & reçois des feedbacks !
                </Typography>
              </div>
            </div>
          </ActiveLink>
          <div className="flex items-center gap-7">
            <Typography
              variant="caption3"
              component="div"
              className="flex items-center gap-7"
            >
              <ActiveLink href="/design-system">Design System</ActiveLink>
              <ActiveLink href="#">Projets</ActiveLink>
              <ActiveLink href="#">Formation</ActiveLink>
              <ActiveLink href="#">Contatcs</ActiveLink>
            </Typography>
            <div className="flex items-center gap-2">
              <Button size="small" variant="secondary">
                Connexion
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button size="small">Rejoindre</Button>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}
