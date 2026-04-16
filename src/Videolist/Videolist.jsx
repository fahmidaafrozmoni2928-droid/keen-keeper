import React, { useContext } from "react";
import { callContext } from "../CallProvider/CallProvider";
import videoImg from "../assets/video.png"
const Videolist = () => {
    const {call} = useContext(callContext);
    return(
        <div>
        
        
        {
            call?.map((call, index)=> {
                return <div>
                 {call.type == "Video" &&  ( <div key={index} className="card bg-base-200 w-350 shadow-sm rounded-lg container mx-auto px-4 py-4 mt-5 flex ">
                        <div className="flex gap-3">
        <div>
        <img className="w-10 h-10" src={videoImg}></img>
        </div>
        <div>
       <p className=" text-gray-600">Video with {call.name}</p>
       <p>{call.next_due_date}</p>
       </div>
       </div>
        </div>)}
                </div>
            })
        }
        
         
        </div>

    )
}
export default Videolist;