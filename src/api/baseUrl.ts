import axios from 'axios';

const baseUrlKey = process.env.REACT_APP_BASE_API;

export const instance = axios.create({
    baseURL: baseUrlKey,
    timeout: 5000,
});
