import axiosClient from "../api/axios";

const useFetchProjectRoles = async () => {
  const res = await axiosClient.get('/user-projects-roles');
  return res.data;
}

export default useFetchProjectRoles;
