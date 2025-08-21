
import axios from "axios";
import {apiKey, baseUrl} from "../constants/Constants";


export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(config => {
    if (!config.params) config.params = {};
    config.params['api_key'] = apiKey;
    return config;
});
