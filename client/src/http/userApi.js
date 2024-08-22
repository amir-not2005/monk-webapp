import { $host, $hostAuth } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (login, password) => {
  const { data } = await $host.post("/users/registration", { login, password });
  localStorage.setItem("token", data);
  return jwtDecode(data);
};

export const loggin = async (login, password) => {
  const { data } = await $host.post("/users/login", { login, password });
  localStorage.setItem("token", data);
  return jwtDecode(data);
};

export const check = async () => {
  const { data } = await $hostAuth.get("/users/auth");
  console.log("AUTH DATA", data);
  localStorage.setItem("token", data);
  return jwtDecode(data);
};
