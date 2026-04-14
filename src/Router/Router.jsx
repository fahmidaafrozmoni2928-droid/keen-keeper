import React from "react";
import Navber from "../Navber/Navber";
import { Outlet } from "react-router";


const Router = () => {
    return(
        <div>
         <Navber></Navber>
         <Outlet></Outlet>
         
        </div>
    )
}
export default Router;