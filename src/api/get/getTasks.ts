import { AxiosRequestConfig } from 'axios';
import { Response, TaskApi, Task } from '../../util/interfaces';
import { instance } from '../baseUrl';


const mapper = (tasks:TaskApi[]): Task[] => { 
    return tasks.map(task => {
        const [time,tarefa] = task.description.split('-')
        let result:Task = {id:task._id, task:tarefa, dayOfWeek:`${task.dayOfWeek.slice(0, 1).toUpperCase()}${task.dayOfWeek.slice(1).toLowerCase()}`, time:time}
        return result
    })
}

export const Tasks = async (dayOfWeek: string, token:string|any): Promise<Response> => {
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
        params: { dayOfWeek },
      };

    try {
        const response = await instance.get("/events", config);
        const result = mapper(response.data.events)
        return ({ 'status': response.status, 'data': result })
    } catch (error: any) {
        return ({ 'status': error.response.status, 'data': error.response.data });
    }
};

