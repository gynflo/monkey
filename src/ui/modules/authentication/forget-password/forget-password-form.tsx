import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/Button";
import { FormInput } from "@/ui/design-system/Form/Input";

interface Props {
  form: FormsType;
}

export function ForgetPasswordForm({ form }: Props) {
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

      <Button
        disabled={isLoading}
        type="submit"
        fullWidth
        isLoading={isLoading}
      >
        Envoyer
      </Button>
    </form>
  );
}
