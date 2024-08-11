import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
});

apiClient.interceptors.request.use(
    config => {
        // You can add token or other headers here
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default apiClient;
