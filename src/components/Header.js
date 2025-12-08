import {  useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
    const [btnNameReact,setBtnNameReact]=useState("Login")
    const OnlineStatus=useOnlineStatus()
    const {loggedInUser}=useContext(UserContext);
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)
    return(
    <div className="flex justify-between bg-pink-100 shadow-2xl m-2 sm:bg-yellow-100 lg:bg-green-200">
        <div className="logo-container">
            <img 
            className="w-56"
            src={LOGO_URL}
            alt="logo"
            />
        </div>
        <div className="flex items-center">
            <ul className="flex m-4 p-4">
                <li className="px-4">Online Status:{OnlineStatus? "✅":"🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4 font-bold text-xl"><Link to="/cart">Cart({cartItems.length} items)</Link></li>
                <button className="login" onClick={()=>{btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")}}>{btnNameReact}</button>
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
        </div>
    </div>
    );
}
export default Header; 