import axios, { AxiosRequestConfig } from 'axios';
import { instance } from './baseUrl';

interface Response{
    status:number;
    data: any;
}

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

