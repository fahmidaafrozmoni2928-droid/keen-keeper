import React, { useContext } from "react";
import Navber from "../Navber/Navber";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import { callContext } from "../CallProvider/CallProvider";


const Router = () => {
    const navigation = useNavigation();
    console.log(navigation.state);
    return(
        <div>
            {navigation.state === "loading" && (
             <div className="fixed inset-0 flex justify-center items-center bg-white/50 z-50">
             <span className=" loading loading-spinner text-success text-4xl"></span>
               </div>
            )  }
         <Navber></Navber>
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
    )
}
export default Router;