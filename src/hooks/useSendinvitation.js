import axiosClient from "../api/axios";

const useSendinvitation = (projectId, recipient, role) => {
  return axiosClient.post(`/projects/${projectId}/send-invitation`, {
    recipient, role
  })
}

export default useSendinvitation