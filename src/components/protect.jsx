import {Navigate} from "react-router-dom"
function Protect(props){
    let token=sessionStorage.getItem("token")

    //return token!==null?props.children:<Navigate to="/wp-admin"/>

    function pro (){
        if(token!==null){
            return props.children
        }
        else{
            return (<Navigate to="/wp-admin"/>)
        }

    }
    return pro()
            
}

export default Protect;