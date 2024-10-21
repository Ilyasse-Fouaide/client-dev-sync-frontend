import axiosClient from "../api/axios";

const useEmailFetch = async (email) => {
  return await axiosClient.post('/check-email', { email });
}

export default useEmailFetch