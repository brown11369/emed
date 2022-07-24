import "../../style/dashboard.css"
import { Outlet, useNavigate, NavLink} from "react-router-dom";




function Dashboard() {
    const navigate = useNavigate()

    return (
        <section className="neo">
            <div className="dashboard-menu">
                <ul>
                    <li className="dashboard-link">Dashboard</li>
                    <li className="dashboard-link">Post</li>
                    <li className="dashboard-link">Media</li>
                    <li className="dashboard-link">Pages</li>
                    <li className="dashboard-link">Comments</li>
                    <li className="dashboard-link">Template</li>
                    <li className="dashboard-link"><NavLink to='/dashboard/addproduct'>Product</NavLink></li>
                    <li className="dashboard-link">Vendors</li>
                    <li className="dashboard-link"><NavLink to='/dashboard/Vproduct'>Vroduct</NavLink></li>
                    <li className="dashboard-link">Users</li>
                    <li className="dashboard-link">Tools</li>
                    <li className="dashboard-link">Settigs</li>
                    <li className="dashboard-link">Security</li>
                    <li className="dashboard-link">Account</li>
                    <li className="dashboard-link"><button onClick={() => {
                        navigate("/wp-admin")
                        sessionStorage.removeItem("token")
                    }}>Log out</button></li>
                </ul>
            </div>
            <div><Outlet /></div>
        </section>
    )
}

export default Dashboard;