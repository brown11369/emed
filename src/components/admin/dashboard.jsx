import "../../style/admin.css"
import {useNavigate} from "react-router-dom";



function Dashboard(){
    const navigate=useNavigate()

    return(       
        <>
        <h1>dashboard area</h1>
        <button onClick={()=>{
            navigate("/wp-admin")
            sessionStorage.removeItem("token")
        }}>logout</button>
        </>
    )
}

export default Dashboard;