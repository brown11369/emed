import "../style/menu.css"
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineBell } from "react-icons/ai";

import { NavLink } from "react-router-dom"

function Menu() {
    return (
        <>
            <header>
                <div className="menu">
                    <div className="logo">
                        <h1>E-Med</h1>
                    </div>
                    <input className="search" type="search" placeholder="Find product" />
                    <div>
                        <AiOutlineSearch className="menuIcon" />
                        <AiOutlineShoppingCart className="menuIcon" />
                        <AiOutlineBell className="menuIcon" />
                    </div>
                </div>
                <nav>
                    <ul className="top-nav">
                        <li className="nav-link"><NavLink to="/home">Home</NavLink></li>
                        <li className="nav-link"><NavLink to="/wellness">Wellness</NavLink></li>
                        <li className="nav-link"><NavLink to="/tablet">Tablet</NavLink></li>
                        <li className="nav-link"><NavLink to="equipment">Baby Product</NavLink></li>
                        <li className="nav-link"><NavLink to="equipment">Hardware</NavLink></li>
                        <li className="nav-link"><NavLink to="equipment">Machine</NavLink></li>
                        <li className="nav-link"><NavLink to="equipment">Device</NavLink></li>
                        <li className="nav-link"><NavLink to="equipment">Equipment</NavLink></li>
                        <li className="nav-link"><NavLink to="More">More</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )

}


export default Menu;