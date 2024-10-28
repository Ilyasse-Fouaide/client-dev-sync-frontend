import axiosClient from "../api/axios";

const useFetchProjects = () => {
  return axiosClient.get('/projects').then((res) => res.data);
}

export default useFetchProjects