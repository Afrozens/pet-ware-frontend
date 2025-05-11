import { User } from "./user";

export interface SignIn {
  email: string;
  password: string;
  confirm_password?: string;
}

export interface SignUpProfessional extends Pick<User, 'last_name' | 'first_name' | 'address' | 'phone_number' | 'email' | 'type_document' | 'document' | 'description'>, Pick<SignIn, 'confirm_password' | 'password'> {}

export interface PasswordReset {
  password: string;
  new_password: string;
  confirm_password?: string;
}

export interface ForgotPassword extends PasswordReset {
  token: string;
  email: string;
}

export interface ActivateUser {
  email: string;
  token: string;
}

export interface SignInResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}
