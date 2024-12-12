import api from "./index";

export const addProducts = async() => await api(
    {
        url: 'products',
        method: 'POST'
    }
)

export const getProducts = async() => {
    const response = await api(
    {
        url: 'products',
        method: 'GET'
    }
)
    console.log(response.data);
    }