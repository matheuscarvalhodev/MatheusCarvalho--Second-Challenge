import axios, { AxiosRequestConfig } from 'axios';
import { Task } from '../util/utils';

interface postTask{
    description: string;
    dayOfWeek: string;
}

export const createTask = async (task:string, dayOfWeek:string,time:string): Promise<any> => {

    const sendTask:postTask = {description: `${time} - ${task}`, dayOfWeek:dayOfWeek} 

    const baseUrlKey = process.env.REACT_APP_BASE_API;
    const url = `${baseUrlKey}/events`;
    const token = localStorage.getItem('token')
    const config: AxiosRequestConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

    try {
        const response = await axios.post(url, sendTask, config);
        return({'status': response.status, 'data':response.data})
      } catch (error: any) {
        return({'status': error.response.status, 'data':error.response.data});
      }
};

