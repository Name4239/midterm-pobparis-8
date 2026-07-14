import axios from "axios";

const api = axios.create({
  baseURL: 'https://mt-todolist-backend.onrender.com',
});

export default api;