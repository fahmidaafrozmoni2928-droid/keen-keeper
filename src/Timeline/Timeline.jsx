import React, { useContext, useEffect, useState } from "react";
import CardDetails from "../CardDetails/CardDetails";
import Card from "../Card/Card";
import { callContext } from "../CallProvider/CallProvider";

import callImg from "../assets/call.png"
import textImg from "../assets/text.png"
import videoImg from "../assets/video.png"
import Calllist from "../Calllist/Calllist";
import Textlist from "../Textlist/Textlist";
import Videolist from "../Videolist/Videolist";
import { IoIosArrowDropdown } from "react-icons/io";
const Timeline = () => {
   
    const {call} = useContext(callContext);
   
    return(
       <div>
        <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Click <IoIosArrowDropdown /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Call</a></li>
    <li><a>Text</a></li>
    <li><a>Video</a></li>
  </ul>
</div>
         
        <Calllist></Calllist>
        <Textlist></Textlist>
        <Videolist></Videolist>

       </div>
    )
}
export default Timeline;