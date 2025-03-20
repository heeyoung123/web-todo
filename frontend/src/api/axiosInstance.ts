import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://15e5-210-99-254-45.ngrok-free.app",
  baseURL: "http://localhost:5173/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  if (config.method === "get") {
    delete config.headers["Content-Type"];
  }
  return config;
});

export default axiosInstance;
