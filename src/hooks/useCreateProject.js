import axiosClient from "../api/axios";

const useCreateProject = ({ name, description, icon }) => {
  return axiosClient.post('/projects', {
    name,
    description,
    icon,
    role: 'owner',
  })
}

export default useCreateProject