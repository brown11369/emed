import { Navigate, useLocation } from "react-router-dom"
function Protect(props) {
    let token = sessionStorage.getItem("token")

    //return token!==null?props.children:<Navigate to="/wp-admin"/>

    const { state } = useLocation();
    return state===null?<Navigate to="/wp-admin" />:pro()
    
    
    function pro() {
        const { idToken } = state;

        if (token === idToken) {
            return props.children
        }
        else {
            return (<Navigate to="/wp-admin" />)
        }

    }
    // return pro()

}

export default Protect;