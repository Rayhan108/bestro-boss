import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart,FaWallet,FaCalendarAlt,FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart]=useCart();
    // const isAdmin =true;
    const [isAdmin]=useAdmin()
    return (
        <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side bg-[#D1A054]">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80">
{
    isAdmin?
    <>
        <li><NavLink to="adminHome"><FaHome></FaHome> Admin Home</NavLink></li>
                <li><NavLink to="addItem"><FaUtensils></FaUtensils> Add Item</NavLink></li>
                <li><NavLink to="manageItem"><FaWallet></FaWallet> Manage Items</NavLink></li>
                <li><NavLink to="dashboard/history"><FaBook></FaBook> Bookings</NavLink></li>
                <li><NavLink to="allUsers"><FaUsers></FaUsers> All Users</NavLink></li>
               
    </>:
    <>
        <li><NavLink to="userHome"><FaHome></FaHome> User Home</NavLink></li>
                <li><NavLink to="reservation"><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                <li><NavLink to="history"><FaWallet></FaWallet> Payment History</NavLink></li>
                <li><NavLink to="myCart"><FaShoppingCart></FaShoppingCart> My Cart<div className="badge  badge-secondary">+{cart?.length || 0}</div>
                </NavLink>
               
                </li>
    </>
}
            
                <div className="divider"></div>
                <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
                </ul>
            
             
           

        </div>
    </div>
    );
};

export default Dashboard;