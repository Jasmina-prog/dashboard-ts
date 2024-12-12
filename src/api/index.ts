import axios from "axios";
import { baseUrl } from "./baseUrl";

type ApiProps = {
    url:string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
    body?: Object | null
}
async function api({url, method, body}: ApiProps) {
    return await axios({
        url: `${baseUrl}/${url}`,
        method: method,
        data: body || undefined
    })
}

export default api