import axios from "axios"

const axiosClient = axios.create({
  baseURL: 'http://192.168.1.25:8000/api/v1',
  withCredentials: true,
});

export default axiosClient;
