import { useAuth } from "@/context/AuthUserProvider";
import { Avatar, Typography } from "@/ui/design-system";
import Link from "next/link";

export function AccountAvatarNavigationLink() {
  const { authUser } = useAuth();
  const { photoURL, displayName } = authUser;

  return (
    <Link href="/mon-espace" className="flex items-center gap-2">
      <Avatar
        size="large"
        src={photoURL}
        alt={
          displayName ? `Avatar de ${displayName}` : "Avatar de l'utilisateur"
        }
      />
      <div className="max-w-[160px]">
        <Typography variant="caption2" className="font-medium truncate">
          {displayName ? "" : "Nom de l'utilisateur"}
        </Typography>
        <Typography variant="caption4" className="font-medium" theme="gray">
          Mon compte
        </Typography>
      </div>
    </Link>
  );
}
