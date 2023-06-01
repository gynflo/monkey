import type { RegisterFormFieldsType } from "@/types/forms";
import { RegisterView } from "./register.view";
import { createUserByFirebase, sendEmailVerificationByFirebase } from "@/api/firebase/authentication";
import { createDocument } from "@/api/firestore";
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

  async function handleCreateUserDocument(
    collectionName: string,
    userID: string,
    userDocument: object
  ) {
    const { error } = await createDocument(
      collectionName,
      userID,
      userDocument
    );

    if (error) {
      toast.error(error.message);
      setIsLoading(false);
      return;
    }

    toast.success("Bienvenue sur l'app des singes codeurs");
    setIsLoading(false);
    reset();
    sendEmailVerificationByFirebase();
  }

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

    const userCreatedByFirebase = {
      email,
      howYouKnewUs,
      uuid: data.uid,
      created_at: new Date(),
    };

    handleCreateUserDocument("users", data.uid, userCreatedByFirebase);
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
