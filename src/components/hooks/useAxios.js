import Axios from 'axios'

export const useAxios = (endpoint = '') => {
  return Axios.create({
    baseURL: `${endpoint}`,
    headers: {
      JSON: 'application/json',
    },
  })
}
