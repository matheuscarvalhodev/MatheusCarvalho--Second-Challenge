import { AxiosRequestConfig } from 'axios';
import { Response } from '../../util/interfaces';
import { instance } from '../baseUrl';

export const DeleteTask = async (id: string, token:string): Promise<Response> => {
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
      };
    
    try {
        const response = await instance.delete(`/events/${id}`, config);
        return ({ 'status': response.status, 'data': response.data })
    } catch (error: any) {
        return ({ 'status': error.response.status, 'data': error.response.data });
    }
};

