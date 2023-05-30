import type { ForgetPasswordFormFieldsType } from "@/types/forms";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { ForgetPasswordView } from "./forget-password.view";
import { sendEmailToResetPassword } from "@/api/firebase/authentication";
import { isReturnStatement } from "typescript";
import { toast } from "react-toastify";
import router, { Router } from "next/router";

export function ForgetPasswordContainer() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<ForgetPasswordFormFieldsType>();

  async function handleResetPassword({ email }: ForgetPasswordFormFieldsType) {
    const { error } = await sendEmailToResetPassword(email);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success(`Un email de réinitialisation vous a été envoyé à ${email}`);
    setIsLoading(false);
    reset();
    router.push("/connexion");
  }

  const onSubmit: SubmitHandler<ForgetPasswordFormFieldsType> = (formData) => {
    setIsLoading(true);
    handleResetPassword(formData);
  };
  return (
    <ForgetPasswordView
      form={{ handleSubmit, register, errors, onSubmit, isLoading }}
    ></ForgetPasswordView>
  );
}
