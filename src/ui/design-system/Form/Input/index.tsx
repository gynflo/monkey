import clsx from "clsx";
import { Typography } from "../../Typography/Typography";

interface InputProps {
  isLoading: boolean;
  placeholder: string;
  type?: "text" | "password" | "email";
  register: any;
  errors: any;
  errorMessage?: string;
  id: string;
  required?: boolean;
  isAutoCompleted?: boolean;
}

export function FormInput({
  isLoading,
  placeholder,
  type = "text",
  register,
  errors,
  id,
  errorMessage = "Ce champ est requis",
  required,
  isAutoCompleted = false,
}: InputProps) {
  return (
    <div className="space-y-2">
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          isLoading && "cursor-not-allowed",
          errors[id]
            ? "placeholder-alert-danger text-alert-danger"
            : "placeholder:text-gray-700",
          "w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary "
        )}
        disabled={isLoading}
        autoComplete={isAutoCompleted ? "on" : "off"}
        {...register(id, {
          required: {
            value: required,
            message: errorMessage,
          },
        })}
      />
      {errors[id] && (
        <Typography variant="caption4" component="div" theme="danger">
          {errors[id].message}
        </Typography>
      )}
    </div>
  );
}
