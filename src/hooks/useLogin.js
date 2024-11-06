import axiosClient from "../api/axios";

const useLogin = async (email, password) => {
  const res = await axiosClient.post('/login', { email, password });
  return res.data;
}

export default useLogin