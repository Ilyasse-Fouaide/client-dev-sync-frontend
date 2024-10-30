import axiosClient from "../api/axios";

const useDeletProject = (projectId) => {
  return axiosClient.delete(`/projects/${projectId}`)
}

export default useDeletProject