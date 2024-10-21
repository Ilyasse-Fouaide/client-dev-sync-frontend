import axiosClient from "../api/axios";

const useFetchProfile = async () => {
  const { data } = await axiosClient.get('/profile');
  return data;
};

export default useFetchProfile;
