import axiosClient from "../api/axios"

const useRegister = async (email, full_name, password, location, birthday) => {
  return await axiosClient.post('/register', {
    email, full_name, password, location, birthday
  })
}

export default useRegister;