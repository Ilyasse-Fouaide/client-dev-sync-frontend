import axiosClient from "../api/axios";

const useUpdateProject = async (projecId, data) => {
  const res = await axiosClient.patch(`/projects/${projecId}`, data)
  return res.data
}

export default useUpdateProject