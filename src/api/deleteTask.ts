import axios, { AxiosRequestConfig } from 'axios';

interface Response{
    status:number;
    data: any;
}

export const DeleteTask = async (id: string): Promise<Response> => {
    const baseUrlKey = process.env.REACT_APP_BASE_API;
    const url = `${baseUrlKey}/events/${id}`;
    const token = localStorage.getItem('token')
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
      };
    
    try {
        const response = await axios.delete(url, config);
        return ({ 'status': response.status, 'data': response.data })
    } catch (error: any) {
        return ({ 'status': error.response.status, 'data': error.response.data });
    }
};

