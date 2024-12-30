import api from "./request";

export const addProducts = async(data:Object) => await api.post('/products', data)

export const getProducts = async() => {
    const response = await api.get('/products')
    const data =  response.data
    console.log(data);
}