import axios, {AxiosRequestConfig} from "axios";
import { API_URL } from "./baseUrl";

// interface ApiProps extends AxiosRequestConfig {
//     url:string
//     method: 'GET' | 'POST' | 'PUT' | 'DELETE'
//     body?: Object | null
// }
// export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
//     body?: object; 
//   }
// async function api({url, method, body}: ApiProps) {
//      const response =  await axios({
//         url: `${baseUrl}/${url}`,
//         method: method,
//         data: body || undefined
//     })
//     return response
// }

const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' }
})


// request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken')
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)


// response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response && error.response.status === 401){
            console.error('Unauthorized - redirecting to login');
        }
        localStorage.clear()
        return Promise.reject(error)
    }
)

export default api 