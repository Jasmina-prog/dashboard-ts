import api from './index'

export const addUsers = async() => {
     await api(
        {
            url: 'users',
            method: 'POST'
        }
    )
}

export const getUsers = async() => {
    const response = await api(
    {
        url: 'users',
        method: 'GET'
    }
)
    console.log(response.data);
}