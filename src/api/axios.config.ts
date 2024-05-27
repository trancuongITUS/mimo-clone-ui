import axios, { AxiosError } from "axios";
import { AUTH_TOKEN_LOCAL_STORAGE_KEY, API_BASE_URL } from "../utils/constant";

export const configuredAxios = axios.create({
  baseURL: API_BASE_URL,
});

configuredAxios.interceptors.request.use(
  (config: any) => {
    const token = localStorage?.getItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);
