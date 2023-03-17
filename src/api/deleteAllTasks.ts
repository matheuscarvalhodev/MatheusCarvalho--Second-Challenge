import axios, { AxiosRequestConfig } from 'axios';

interface Response{
    status:number;
    data: any;
}

export const DeleteAllTasks = async (dayOfWeek: string): Promise<Response> => {
    console.log('aqqui')
    dayOfWeek = `${dayOfWeek.slice(0, 1).toLowerCase()}${dayOfWeek.slice(1).toLowerCase()}`
    console.log(dayOfWeek)
    const baseUrlKey = process.env.REACT_APP_BASE_API;
    const url = `${baseUrlKey}/events`;
    const token = localStorage.getItem('token')
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` },
        params: { dayOfWeek },
      };
    
    try {
        const response = await axios.delete(url, config);
        console.log("AAAQUI   ",response.data)
        return ({ 'status': response.status, 'data': response.data })
    } catch (error: any) {
        console.log(error.response.data)
        return ({ 'status': error.response.status, 'data': error.response.data });
    }
};

