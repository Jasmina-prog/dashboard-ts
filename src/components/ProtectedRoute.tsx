import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
    children: JSX.Element
    isAuthenticated: boolean
}
function ProtectedRoute({children, isAuthenticated}:ProtectedRouteProps){
    if(!isAuthenticated){
        return <Navigate to={'/'}/>
    } else{
        return children
    }
}
export default ProtectedRoute