import { AxiosRequestConfig } from 'axios';
import { PostTask, Response } from '../../util/interfaces';
import { instance } from '../baseUrl';

export const createTask = async (task:string, dayOfWeek:string,time:string,token:string): Promise<Response> => {
    const sendTask:PostTask = {description: `${time} - ${task}`, dayOfWeek:dayOfWeek} 
    const config: AxiosRequestConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

    try {
        const response = await instance.post('/events', sendTask, config);
        return({'status': response.status, 'data':response.data})
      } catch (error: any) {
        return({'status': error.response.status, 'data':error.response.data});
      }
};

