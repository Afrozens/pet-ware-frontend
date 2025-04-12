export interface SignIn {
  email: string;
  password: string;
  confirm_password?: string;
}

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