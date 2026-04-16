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

const Timeline = () => {
   
    const {call} = useContext(callContext);
   
    return(
       <div>
         
        <Calllist></Calllist>
        <Textlist></Textlist>
        <Videolist></Videolist>

       </div>
    )
}
export default Timeline;