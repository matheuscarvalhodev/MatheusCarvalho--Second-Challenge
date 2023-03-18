import axios, { AxiosRequestConfig } from 'axios';
import { Task } from '../util/utils';
import { instance } from './baseUrl';

interface postTask{
    description: string;
    dayOfWeek: string;
}

export const createTask = async (task:string, dayOfWeek:string,time:string,token:string): Promise<any> => {
    const sendTask:postTask = {description: `${time} - ${task}`, dayOfWeek:dayOfWeek} 
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

