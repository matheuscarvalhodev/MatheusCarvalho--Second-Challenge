import { Response } from '../../util/interfaces';
import { instance } from '../baseUrl';


export const loginUser = async (user: string, password: string): Promise<Response> => {
    const userData = {
        email: user,
        password: password
    };

    try {
        const response = await instance.post('/users/sign-in', userData);
        return({'status': response.status, 'data':response.data})
      } catch (error: any) {
        return({'status': error.response.status, 'data':error.response.data});
      }
};

