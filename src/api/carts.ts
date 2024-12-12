import api from "./index";

export const addCarts = async() => await api(
    {
        url:'carts',
        method: 'POST'
    }
)

export const getCarts = async() => {
    const response = await api(
    {
        url: 'carts',
        method: 'GET'
    }
)
console.log(response.data);
}