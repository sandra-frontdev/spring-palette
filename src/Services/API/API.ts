import axios from 'axios';

export const baseURL = '';

export const instance = axios.create({
  baseURL,
  withCredentials: true,
});

const handleResponse = (response: any) => ({ response: response.data });

const handleError = (error: any) => ({
  error: error.response?.data?.error || error,
});

export const API = {
  get: (url: string, config?: any) =>
    instance.get(url, config).then(handleResponse, handleError),
  post: (url: string, data: any | undefined, config?: any) =>
    instance.post(url, data, config).then(handleResponse, handleError),
  put: (url: string, data: any | undefined, config?: any) =>
    instance.put(url, data, config).then(handleResponse, handleError),
  patch: (url: string, data: any | undefined, config?: any) =>
    instance.patch(url, data, config).then(handleResponse, handleError),
  delete: (url: string, data?: any | undefined) =>
    instance.delete(url, { data }).then(handleResponse, handleError),
};
