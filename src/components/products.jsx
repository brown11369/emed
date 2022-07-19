import {useEffect, useState} from "react"
import "../style/product.css"


function Product(){

    let [pro,setPro]=useState()
    useEffect(()=>{

        fetch('https://emed24.herokuapp.com')
        .then(response => response.json())
        .then(data => setPro(data.success))
        .catch((err)=>{
            console.log(err)
        })

    },[])

        
    

    return(
        <>
        <h1>HI{pro}</h1>
        </>
    )
}

export default Product;