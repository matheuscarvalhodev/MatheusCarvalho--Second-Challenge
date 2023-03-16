import axios from 'axios';


export const loginUser = async (user: string, password: string): Promise<any> => {
    const baseUrlKey = process.env.REACT_APP_BASE_API;
    const url = `${baseUrlKey}/users/sign-in`;

    const userData = {
        email: user,
        password: password
    };

    try {
        const response = await axios.post(url, userData);
        return({'status': response.status, 'data':response.data})
      } catch (error: any) {
        return({'status': error.response.status, 'data':error.response.data});
      }
};

