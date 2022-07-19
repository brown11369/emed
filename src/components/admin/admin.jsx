import "../../style/admin.css"

function Vendor(){

    const adminData={};

    function readData(property,value){
        adminData[property]=value;
        console.log(adminData)
    }

    function addAdmin(){
        fetch("https://emed24.herokuapp.com",{
            method:"GET"
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    

    return(
        <>
        <form>
            <input type="text" onChange={(event)=>{
                readData("name",event.target.value)
            }} placeholder="Your name"/>
            <input type="text" placeholder="Your Email" onChange={(event)=>{
                readData("email",event.target.value)
            }}/>
            <input type="number" minLength="10" placeholder="Your number" onChange={(event)=>{
                readData("phone",event.target.value)
            }}/>
            <input type="text" placeholder="Your password" onChange={(event)=>{
                readData("password",event.target.value)
            }}/>
            <input type="text" placeholder="Your pic url" onChange={(event)=>{
                readData("image",event.target.value)
            }}/>
            <button type="button" onClick={addAdmin}>submit</button>
        </form>
        </>
    )
}

export default Vendor;