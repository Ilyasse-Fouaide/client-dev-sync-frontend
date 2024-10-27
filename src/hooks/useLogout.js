import axiosClient from "../api/axios"

const useLogout = () => {
  return axiosClient.post('/logout')
}

export default useLogout