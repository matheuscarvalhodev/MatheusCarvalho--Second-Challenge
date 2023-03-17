import axios from 'axios';
import { SignupFormData } from '../util/utils';


export const createUser = async (userInput: SignupFormData): Promise<any> => {
    const baseUrlKey = process.env.REACT_APP_BASE_API;
    const url = `${baseUrlKey}/users/sign-up`;
  
    try {
      const response = await axios.post(url, userInput);
      return({'status': response.status, 'data':response.data})
    } catch (error: any) {
      return({'status': error.response.status, 'data':error.response.data});
    }
  };

