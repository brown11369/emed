import "../style/product.css"
import { AiOutlineShoppingCart, AiOutlineHeart} from "react-icons/ai";



function Product(){
    return (
        <>
        <div className="product-card">
            <div className="discount">
                <span className="product-like">
                <AiOutlineHeart className="heart-icon" />
                214
                </span>
                <span className="product-offer">
                21% off
                </span>
            </div>
            <img className="product-img" src="./assets/images/prod.jpg" alt="prod" />
            <h3 className="product-name">Demo - x45</h3>
            <div className="buying">
                <span className="product-cart">
                <AiOutlineShoppingCart className="menuIcon" />
                </span>
                
                <button className="product-buy">Buy Now</button>
               
            </div>

        </div>
        </>
    )
}


export default Product;