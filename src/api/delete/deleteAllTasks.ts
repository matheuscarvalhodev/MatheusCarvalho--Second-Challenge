import { AxiosRequestConfig } from 'axios';
import { Response } from '../../util/interfaces';
import { instance } from '../baseUrl';


export const DeleteAllTasks = async (dayOfWeek: string,token:string): Promise<Response> => {

    dayOfWeek = `${dayOfWeek.slice(0, 1).toLowerCase()}${dayOfWeek.slice(1).toLowerCase()}`
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
        params: { dayOfWeek },
      };
    
    try {
        const response = await instance.delete('events', config);
        return ({ 'status': response.status, 'data': response.data })
    } catch (error: any) {
        return ({ 'status': error.response.status, 'data': error.response.data });
    }
};

