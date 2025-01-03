import { useQuery } from "@tanstack/react-query";
import api from "./request";

export const useGetMe = () => {
    const requestMe = async () => { 
        const response = await api.get('/auth/me');
        return response.data;
    }
  return useQuery({queryKey: ['me-request'], queryFn: requestMe});
}