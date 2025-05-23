import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $hostAuth = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config) => {
  const token = localStorage.getItem("token");
  config.headers.authorization = "Bearer " + token;
  console.log("HTTP INDEX JS BEARER:", config.headers.authorization);
  return config;
};

$hostAuth.interceptors.request.use(authInterceptor);

export { $host, $hostAuth };
