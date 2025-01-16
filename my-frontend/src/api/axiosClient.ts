import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Backend URL base
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": "12345", // The API Key defined in the backend
  },
});

export default axiosClient;
