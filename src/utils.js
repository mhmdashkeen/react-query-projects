import axios from "axios"

const axiosOptions = axios.create({
    baseURL: 'http://localhost:5000/api/tasks'
});

export default axiosOptions;