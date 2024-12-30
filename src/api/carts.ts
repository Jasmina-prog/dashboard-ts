import api from "./request";

export const addCarts = async() => await api.post('/carts')

export const getCarts = async() => {
    const response = await api.get('/carts')
return response.data
}