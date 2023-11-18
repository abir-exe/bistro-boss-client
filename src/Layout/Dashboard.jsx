import { FaCalendar, FaHome, FaList, FaRedditAlien, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar  */}
            <div className="w-64 min-h-screen bg-orange-600 text-white">
                <ul className="menu">
                    <li><NavLink to="/dashboard/userHome"><FaHome/> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><FaShoppingCart/> My Cart</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendar/> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/review"><FaRedditAlien/> Review</NavLink></li>
                    <li><NavLink to="/dashboard/bookings"><FaList/> My Bookings</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome/>Home</NavLink></li>
                    <li><NavLink to="/order/salad"><FaSearch/>Menu</NavLink></li>
                </ul>
            </div>
            {/* dashboard content  */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;