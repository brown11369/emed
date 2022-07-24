function Addproduct(){
    return (
        <>
    <div>
        <h3>Add ur product</h3>
        <form >
            <input type="text" placeholder="Product name"/>
            <input type="number" placeholder="selling price"/>
            <input type="number" placeholder="retail price"/>
            <input type="text" placeholder="Product description"/>
            <input type="text" placeholder=" main Product image"/>
            <input type="text" placeholder="Product images"/>
            <p>is this medicine need precripction</p>
            <input type="radio" id="false" name="precri" />
            <label htmlFor="false" value="false" >no</label>
            <input type="radio" id="true" name="precri" />
            <label htmlFor="true" value="true" >yes</label>
            <input type="text" placeholder="categories"/>
            <input type="text" placeholder="brand"/>
        </form>
    </div>
    </>
    )
}


export default Addproduct;