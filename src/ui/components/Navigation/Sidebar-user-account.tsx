import { signOutUserByFirebase } from "@/api/firebase/authentication";
import { Typography, Button, Box } from "@/ui/design-system";
import { ActiveLink } from "./Active-link";

import { toast } from "react-toastify";
import router from "next/router";

export function NavigationSidebarUserAccount() {
  async function handleLogoutUser() {
    const { error } = await signOutUserByFirebase();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Vous êtes bien déconnecté !");
    router.push("/");
  }

  return (
    <Box className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <Typography variant="caption2" className="font-medium">
          <ActiveLink href="/mon-espace">Mon Compte</ActiveLink>
        </Typography>
        <Typography variant="caption2" className="font-medium">
          <ActiveLink href="#">Mes projets</ActiveLink>
        </Typography>
      </div>
      <Button action={handleLogoutUser} variant="danger">
        Déconnexion
      </Button>
    </Box>
  );
}
