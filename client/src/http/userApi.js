import { $host, $hostAuth } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (login, password) => {
  const { data } = await $host.post("users/registration", { login, password });
  return jwtDecode(data);
};

export const loggin = async (login, password) => {
  const { data } = await $host.post("users/login", { login, password });
  return jwtDecode(data);
};

export const check = async () => {
  const response = await $host.post("users/auth");
  return response;
};
