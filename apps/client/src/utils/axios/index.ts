import axios from "axios";
export const BASE_URL = 'http://localhost:3000/api';
export const apiClient = axios.create({
    baseURL: BASE_URL
});