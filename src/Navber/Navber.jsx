import React from "react"
import { Link, NavLink } from "react-router";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { IoAnalyticsSharp } from "react-icons/io5";
import logoImg from "../assets/logo.png";
const Navber = () => {
    return(
        <div className="w-full bg-base-100 shadow-sm">
      <div className="navbar   container mx-auto">
  <div className="flex-1">
    <img src={logoImg}></img>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 space-x-3">
      
      <li><NavLink to="/"   className={({isActive}) =>`btn flex items-center gap-2 ${isActive? "bg-green-800 text-white " :"text-gray-600 bg-white"}`}><FaHome /> Home</NavLink> </li>
       
          
            <li><NavLink to="/timeline"  className={({isActive}) =>`btn flex items-center gap-2 ${isActive? "bg-green-800 text-white border-green-500" :"text-gray-600 bg-white"}`}><RiTimeLine /> Timeline</NavLink></li>
            <li><NavLink to="/status" className={({isActive}) =>`btn flex items-center gap-2 ${isActive? "text-white bg-green-800" :"text-gray-600 bg-white"} `}><IoAnalyticsSharp /> Status</NavLink></li>
          </ul>
       
     
  </div>
</div>


        </div>
    )
}
export default Navber;



