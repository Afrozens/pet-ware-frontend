import axios from './instance';
import { SignIn, SignInResponse } from '@/models/auth';
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
      await axios.post('/auth/register-client', data);
    } catch (error) {
      throw formatedErrorServices(error);
    }
  };

}

export default AuthService;
