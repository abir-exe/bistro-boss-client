import {
    FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaRedditAlien,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div className="flex">
      {/* dashboard side bar  */}
      <div className="w-64 min-h-screen bg-orange-600 text-white">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaUtensils/> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart /> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaRedditAlien /> Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList /> My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links  */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
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
