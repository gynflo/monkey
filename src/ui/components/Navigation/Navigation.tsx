import { useAuth } from "@/context/AuthUserProvider";
import { Container, ActiveLink } from "@/ui/components";
import { Button, Logo, Typography } from "@/ui/design-system";
import { AccountAvatarNavigationLink } from "@/ui/components/Navigation";

interface Props {}

export function Navigation({}: Props) {
  const { authUser } = useAuth();
  console.log("🚀 ~ file: Navigation.tsx:9 ~ Navigation ~ authUser:", authUser);

  const authentificationButtons = (
    <div className="flex items-center gap-2">
      <Button size="small" variant="secondary" baseUrl="/connexion">
        Connexion
      </Button>

      <Button size="small" baseUrl="/connexion/inscription">
        Rejoindre
      </Button>
    </div>
  );

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

            {!authUser ? (
              authentificationButtons
            ) : (
              <AccountAvatarNavigationLink />
            )}
          </div>
        </Container>
      </nav>
    </>
  );
}
