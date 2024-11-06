import axiosClient from "../api/axios";

const useFetchProjects = async () => {
  const res = await axiosClient.get('/projects');
  return res.data;
}

export default useFetchProjects