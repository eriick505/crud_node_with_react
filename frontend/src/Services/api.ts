import axios from "axios";

export const tokenKey = "userToken";

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

http.interceptors.request.use((config) => {
  const token = window.localStorage.getItem(tokenKey);

  if (token) {
    config.headers!["Authorization"] = `bearer ${token}`;
  }

  return config;
});

export default http;
