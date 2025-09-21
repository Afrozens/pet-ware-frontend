import axios from './instance';
import { SignIn, SignInResponse, SignUpProfessional, RecoveryPassword, ResetPassword, ForgotPassword } from '@/models/auth';
import { formatedErrorServices } from '@/utils/error';

/**
 * Service class for handling authentication and authorization operations including:
 * - User registration
 */
class AuthService {
  /**
   * Authenticates a user with email and password
   * @param {SignIn} dataOutside - Login credentials (email and password)
   * @throws {Error} When authentication fails
   */
  loginAuth = async (dataOutside: SignIn) => {
    try {
      const formData = new FormData();
      formData.append('username', dataOutside.email.toLowerCase());
      formData.append('password', dataOutside.password);
      const { data } = await axios.post('/auth/login', formData, {
        withCredentials: true,
      });
      const dataToken = data as SignInResponse;
    } catch (error) {
      throw formatedErrorServices(error);
    }
  };

  /**
   * Registers a new client account
   * @param {SignIn} dataOutside - Client registration data
   * @throws {Error} When registration fails
   */
  registerClient = async (dataOutside: SignIn) => {
    try {
      const data = {
        ...dataOutside,
        email: dataOutside.email.toLowerCase(),
      };
      await axios.post('/auth/register/client', data);
    } catch (error) {
      throw formatedErrorServices(error);
    }
  };

  /**
   * Registers a new professional account
   * @param {SignUpProfessional} dataOutside - Professional registration data
   * @throws {Error} When registration fails
   */
  registerProfessional = async (dataOutside: SignUpProfessional) => {
    try {
      const data = {
        ...dataOutside,
        email: dataOutside.email.toLowerCase(),
        first_name: dataOutside.first_name.toLowerCase(),
        last_name: dataOutside.last_name.toLowerCase(),
      }
    } catch (error) {
      throw formatedErrorServices(error);
    }
  }

  /**
 * Sends a password recovery request for a user
 * @param {RecoveryPassword} dataOutside - The user's email address
 * @throws {Error} When the recovery request fails
 */
  recoverPassword = async (dataOutside: RecoveryPassword) => {
    try {
      const data = {
        email: dataOutside.email.toLowerCase(),
      };
      await axios.post('/auth/recovery-password', data);

    } catch (error) {
      throw formatedErrorServices(error);
    }
  };

    /**
 * Sends a password recovery request for a user
 * @param {RecoveryPassword} dataOutside - The user's email address
 * @throws {Error} When the recovery request fails
 */
  resetPassword = async (dataOutside: Omit<ForgotPassword, 'password'>) => {
    try {
      await axios.post('/auth/reset-password', dataOutside);

    } catch (error) {
      throw formatedErrorServices(error);
    }
  };

  /**
   * asdasda
   * 
   */
  resetVerifyPassword = async (dataOutside: Pick<ForgotPassword, 'token' | 'email'>): Promise<boolean> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-verify-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataOutside)
      })
      const result = await response.json()
      return result
    } catch (error) {
      throw formatedErrorServices(error);
    }
  }
}

export default AuthService;
