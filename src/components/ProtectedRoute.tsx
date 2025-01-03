import { Navigate } from "react-router-dom"
// import { useGetMe } from "../api/use-me"

interface ProtectedRouteProps {
    children: JSX.Element
    // isAuthenticated: boolean
}
function ProtectedRoute({children}:ProtectedRouteProps){
    const token = localStorage.getItem('authToken')
    // const { isError, isLoading} = useGetMe()

    // if(isLoading) return <h1>Loading...</h1>

    if(!token){
        return <Navigate to={'/'}/>
    } else{
        return children
    }

}
export default ProtectedRoute 