import axiosClient from "../api/axios";

const useLogin = (email, password) => {
  return axiosClient.post('/login', { email, password });
}

export default useLogin