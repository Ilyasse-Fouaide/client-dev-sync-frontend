import axiosClient from "../api/axios";

const useFetchProjectRoles = () => {
  return axiosClient.get('/user-projects-roles').then((res) => res.data)
}

export default useFetchProjectRoles;
