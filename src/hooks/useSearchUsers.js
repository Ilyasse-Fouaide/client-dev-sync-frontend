import axiosClient from "../api/axios";

const useSearchUsers = async (searchDebounced) => {
  const res = await axiosClient
    .get(`/users/search?search=${searchDebounced}`);
  return res.data;
}

export default useSearchUsers