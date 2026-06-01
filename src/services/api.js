import axios from "axios";

const API = axios.create({
  baseURL: "https://taskflow-backend-z2a8.onrender.com",
  withCredentials: true,
});

export default API; 