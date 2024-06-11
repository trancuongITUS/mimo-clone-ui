import { configuredAxios } from "./axios.config";

const login = async (email: string, password: string) => {
  const res = await configuredAxios.post("/authenticate/login", {
    email,
    password,
  });
  return res.data;
};

export const AuthAPI = {
  login,
};
