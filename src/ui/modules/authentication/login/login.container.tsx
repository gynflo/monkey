import type { LoginFormFieldsType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginView } from "./login.view";

import { useToggle } from "@/hooks";

import { signInUserByFirebase } from "@/api/firebase/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export function LoginContainer() {
  const router  = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle();

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
