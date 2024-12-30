import React from "react";
import { Button } from "antd";

type ButtonProps = {
    name:string
    handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
    style?: React.CSSProperties
    type?: 'primary'
}
function ButtonGlobal(props:ButtonProps){
    return <Button onClick={props.handleClick} type={props.type} style={props.style}>{props.name}</Button>
}
export default ButtonGlobal