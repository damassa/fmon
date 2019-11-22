import axios from "axios";
import { getToken } from "./auth";

require('dotenv').config();

const api = axios.create({
  baseURL: process.env.HOST
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
