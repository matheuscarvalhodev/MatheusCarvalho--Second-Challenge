import { Response, SignupFormData } from '../../util/interfaces';
import { instance } from '../baseUrl';


export const createUser = async (userInput: SignupFormData): Promise<Response> => {
    try {
      const response = await instance.post('/users/sign-up', userInput);
      return({'status': response.status, 'data':response.data})
    } catch (error: any) {
      return({'status': error.response.status, 'data':error.response.data});
    }
  };

