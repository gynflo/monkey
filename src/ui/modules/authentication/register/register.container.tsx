import type { RegisterFormFieldsType } from "@/types/forms";
import { RegisterView } from "./register.view";
import { createUserByFirebase } from "@/api/firebase/authentication";
import { useToggle } from "@/hooks/useToggle";

import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export function RegisterContainer() {
  const { value: isLoading, setValue: setIsLoading } = useToggle();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>();

  async function handleCreateUserAuthentication({
    email,
    password,
    howYouKnewUs,
  }: RegisterFormFieldsType) {
    const { data, error } = await createUserByFirebase(email, password);
    if (error) {
      toast.error(error.message);
      setIsLoading(false);
      return;
    }

    /**
     * TODO Create user Document 
     */

    toast.success("Bienvenue sur l'app des singes codeurs");
    setIsLoading(false);
  }

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    const { password } = formData;
    setIsLoading(true);
    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Le password doit comporter au minimun 6 caractères",
      });
      setIsLoading(false);
      return;
    }
    handleCreateUserAuthentication(formData);
    setIsLoading(false);
    reset();
  };

  return (
    <RegisterView
      form={{ handleSubmit, register, errors, onSubmit, isLoading }}
    ></RegisterView>
  );
}
