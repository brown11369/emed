import "../../style/adminreg.css"
import {useNavigate} from "react-router-dom";

function Adminreg(){
    const navigate=useNavigate()
    let loginData={
        "role":"admin"
    };

    function readData(property,value){
        loginData[property]=value;
    }

    function login(){
        fetch("https://emed24.herokuapp.com/app/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(loginData)
        })
        .then(response=>response.json())
        .then((data)=>{
            sessionStorage.setItem("token",data.token)
            navigate("/dashboard")
        })
        .catch((err)=>{
            console.log("check internet connection")
        })
    }

    return(
        <>
        <section className="admin-bg">
            <div className="admin-card">
                <div className="action-field">
                    <input className="inp" type="text" onChange={(event)=>{
                        readData("email",event.target.value)
                    }} placeholder="Enter Email"/>
                    <input className="inp" type="password" onChange={(event)=>{
                        readData("password",event.target.value)
                    }} placeholder="Password"/>
                    {/* <input type="text" onChange={()=>{
                        readData("role","admin")
                    }} /> */}
                    <button onClick={()=>{
                        login()
                    }} className="btn">Submit</button>
                    <div><p className="forget">Forget Password?</p></div>
                </div>

            </div>
        </section>
        </>
    )
}

export default Adminreg;