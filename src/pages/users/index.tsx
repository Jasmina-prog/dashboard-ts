import { getUsers } from "../../api/users";
import { MenuGlobal } from "../../components/Menu";

export function Users(){
    console.log(getUsers());
    
    return(
        <>
        <MenuGlobal name='Users Page'/>
        </>
    )
}