import type { LoginFormFieldsType } from "@/types/forms";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginView } from "./login.view";

import { auth } from "@/config/firebase-config";
import { useToggle } from "@/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { signInUserByFirebase } from "@/api/firebase/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export function LoginContainer() {
  const router  = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("user => ", user);
        // ...
      } else {
        console.log("Tu n'est pas connecté !!");

        // User is signed out
        // ...
      }
    });
  }, []);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldsType>();

  async function handleUserSignIn({ email, password }: LoginFormFieldsType) {
    const { error } = await signInUserByFirebase(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Bienvenue sur Coders Monkeys");
    reset();
    setIsLoading(false);
    router.push("/mon-espace");
  }

  const onSubmit: SubmitHandler<LoginFormFieldsType> = (formData) => {
    setIsLoading(true);
    const { password } = formData;
    if (password.length <= 5) {
      setError("password", {
        type: "manuel",
        message: "Ton mot de passe doit comporter au minimun 6 caractères",
      });
      setIsLoading(false);
      return;
    }
    handleUserSignIn(formData);
    setIsLoading(false);
  };
  return (
    <LoginView
      form={{ handleSubmit, register, errors, onSubmit, isLoading }}
    ></LoginView>
  );
}
