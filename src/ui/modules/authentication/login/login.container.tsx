import type { LoginFormFieldsType } from "@/types/forms";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginView } from "./login.view";

export function LoginContainer() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldsType>();

  const onSubmit: SubmitHandler<LoginFormFieldsType> = (formData) => {
    setIsLoading(true);
    console.log(
      "🚀 ~ file: register.container.tsx:18 ~ onSubmit ~ formData:",
      formData
    );
    setIsLoading(false);
    
  };
  return (
    <LoginView
      form={{ handleSubmit, register, errors, onSubmit, isLoading }}
    ></LoginView>
  );
}
