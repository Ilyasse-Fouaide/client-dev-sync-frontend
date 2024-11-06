import axiosClient from "../api/axios";

const useFetchSingleProject = async (projectId) => {
  const res = await axiosClient.get(`/projects/${projectId}`)
  return res.data
}

export default useFetchSingleProject