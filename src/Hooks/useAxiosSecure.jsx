import axios from "axios";


export const axiosSecufre = () => axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    return axiosSecure;
}

export default useAxiosSecure;