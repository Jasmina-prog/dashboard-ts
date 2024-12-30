import api from './request'

export const addUsers = async() => {
     await api.post('/users')
}

export const getUsers = async() => {
    const response = await api.get('/users')
    console.log(response.data);
    return response.data
}