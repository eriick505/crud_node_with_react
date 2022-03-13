import axios from "axios";

import { tokenKey } from "./login/utils";

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
