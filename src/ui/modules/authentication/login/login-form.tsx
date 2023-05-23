import type { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/Button";
import { FormInput } from "@/ui/design-system/Form/Input";

interface Props {
  form: FormsType;
}

export function LoginForm({ form }: Props) {
  const { handleSubmit, register, errors, onSubmit, isLoading } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <FormInput
        type="email"
        errors={errors}
        id="email"
        isLoading={isLoading}
        placeholder="johndoe@gmail.com"
        required={true}
        register={register}
      />
      <FormInput
        type="password"
        errors={errors}
        id="password"
        isLoading={isLoading}
        placeholder="Mot de passe"
        required={true}
        register={register}
      />

      <Button
        disabled={isLoading}
        type="submit"
        fullWidth
        isLoading={isLoading}
      >
        Connexion
      </Button>
    </form>
  );
}
