// import { children } from "react";
import {Navigate} from "react-router-dom"
function Protect(props){
    let token=sessionStorage.getItem("token")
    console.log(token)
    return(
        token!==null?props.children:<Navigate to="/admin-reg"/>
    )
}

export default Protect;