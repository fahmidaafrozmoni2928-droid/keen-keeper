import React from "react";
import logoxlImg from "../assets/logo-xl.png"
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return(
        <div>
                 <div className="bg-[#244D3F] px-30 mt-10 py-10">
        <div className=" text-white flex justify-center items-center">
           <div className="space-y-3">
            <img className="flex items-center justify-center pl-50" src={logoxlImg}></img>
            <p className="  text-[#FFFFFF]/60">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div> 

          


          

            

        


          
            

            </div>
            <div className="space-y-3">
                <h3 className="flex justify-center text-white">Social Links</h3>

                <div className="flex gap-4 items-center justify-center text-white">
                <FaInstagram />
                <FaFacebook />
                <FaXTwitter />
                </div>
            </div>

            <hr className="px-20 border-t-2 border-[#FFFFFF]/20 my-4 w-full"></hr>
            <div className=" flex justify-between text-[#FFFFFF]/60">
            <p className="text-[#FFFFFF]/60">&copy;  2026 KeenKeeper. All rights reserved.</p>

            <div className="flex gap-4">
                <p>Privacy Policy </p>
                <p>Terms of Service</p>
                <p> Cookies</p>
            </div>
            </div>

        </div> 
        </div>
    )
}
export default Footer;