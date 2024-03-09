import coreAxios from 'axios';

export const axios = (() => {
  const axiosInstance = coreAxios.create({
    baseURL: process.env.BACKEND_URL,
    withCredentials: true,
    headers: {
      'Content-type': 'application/json',
    },
  });

  axiosInstance.interceptors.response.use(
    response => response,
    async error => {
      return Promise.reject(error);
    },
  );

  return axiosInstance;
})();

export { AxiosError } from 'axios';
