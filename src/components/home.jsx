import "../style/home.css"
import { AiOutlineSearch, AiOutlineShoppingCart,AiOutlineBell } from "react-icons/ai";
import { useState } from "react";



function Home(){

    let [token,setToken]=useState(false)
    let dtoken
    function checktoken(){
        if(token===false){
            dtoken=sessionStorage.getItem("token")
            setToken(true)
        }
        else{
            dtoken=sessionStorage.removeItem("token")
            setToken(false)
        }
    }


    return(
        <>
        <header>
            <div className="menu">
                {
                    token
                }
                <div className="logo">
                    <h1>firstMed</h1>
                    {/* <form> */}
                    <button type="Submit" onClick={()=>{
                        checktoken();
                        // sessionStorage.removeItem("token")
                    }}>logout</button>
                    {/* </form> */}
                    
                </div>
                <div>
                    {/* <input type="search"/> */}
                    <AiOutlineSearch className="menuIcon"/>
                    <AiOutlineShoppingCart className="menuIcon"/>
                    <AiOutlineBell className="menuIcon"/>
                </div>
            </div>
            <nav>

            </nav>
        </header>
        <section className="hero">
            <h3>Best Online</h3>
            <h2>Medicine</h2>
            <h3>Delivery Services</h3>
        </section>
        </>
    )
}

export default Home;