export interface FormsType {
  control?: any;
  handleSubmit: any;
  isLoading: boolean;
  register: any;
  errors: any;
  onSubmit: any;
}

export interface ForgetPasswordFormFieldsType {
  email: string;
}

export interface LoginFormFieldsType extends ForgetPasswordFormFieldsType {
  password: string;
}

export interface RegisterFormFieldsType extends LoginFormFieldsType {
  howYouKnewUs: string;
}
