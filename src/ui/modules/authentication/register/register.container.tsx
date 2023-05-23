import type { RegisterFormFieldsType } from "@/types/forms";
import { RegisterView } from "./register.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

export function RegisterContainer() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>();

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setIsLoading(true);
    console.log(
      "🚀 ~ file: register.container.tsx:18 ~ onSubmit ~ formData:",
      formData
    );
    setIsLoading(false);

  };

  return (
    <RegisterView
      form={{ handleSubmit, register, errors, onSubmit, isLoading }}
    ></RegisterView>
  );
}
