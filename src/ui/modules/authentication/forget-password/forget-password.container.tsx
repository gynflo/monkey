import type { ForgetPasswordFormFieldsType } from "@/types/forms";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { ForgetPasswordView } from "./forget-password.view";

export function ForgetPasswordContainer() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<ForgetPasswordFormFieldsType>();

  const onSubmit: SubmitHandler<ForgetPasswordFormFieldsType> = (formData) => {
    setIsLoading(true);
    console.log(
      "🚀 ~ file: register.container.tsx:18 ~ onSubmit ~ formData:",
      formData
    );
    setIsLoading(false);
  };
  return (
    <ForgetPasswordView
      form={{ handleSubmit, register, errors, onSubmit, isLoading }}
    ></ForgetPasswordView>
  );
}
