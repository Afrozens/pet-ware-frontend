import axios from './instance';
import { SignIn } from '@/models/auth';
import { formatedErrorServices } from '@/utils/error';

/**
 * Service class for handling authentication and authorization operations including:
 * - User registration
 */
class AuthService {
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
