import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import vectorImg from "../assets/vector.png"
import archiveImg from "../assets/archive.png"
import trashImg from "../assets/Trash.png"
import callImg from "../assets/call.png"
import textImg from "../assets/text.png"
import videoImg from "../assets/video.png"
import { callContext } from "../CallProvider/CallProvider";
const CardDetails = () => {
   
const {setCall} = useContext(callContext);
     
    const {id} = useParams();
    console.log(id);
    const handleCall = () => {
      setCall(prev => [...prev, {...findFriend, type: "Call"}]);
    }
    const handleText = () => {
      setCall(prev => [...prev, {...findFriend, type: "Text"}]);
    }
    const handleVideo = () => {
      setCall(prev => [...prev, {...findFriend, type: "Video"}]);
    }
   

    const friends = useLoaderData();
    console.log(friends);

    const findFriend = friends.find(friend => friend.id == id);
    console.log(findFriend);

    if(findFriend.length === 0){
      return <p>card is empty</p>
    }
    return(
      <div className=" bg-base-200">
        <div className="container mx-auto grid grid-cols-2">
        <div className="bg-base-200 pt-10">
         <div  className="card bg-base-100 w-85 aspect-square shadow-sm rounded-lg container mx-auto ">
                <figure>
                  <img className="rounded-full mt-5 w-20 h-20"
                    src={findFriend.picture}
                    alt={findFriend.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold text-xl flex items-center justify-center">{findFriend.name}</h2>
                  <div
                    className= {`rounded-full px-3 mx-20 py-3 text-center text-sm
                   ${findFriend.status === "on-track" ? "bg-green-800 text-white" : findFriend.status === "overdue" ? "bg-red-500 text-white" :
                        findFriend.status === "almost due" ? "bg-[#EFAD44] text-white" : ""}` }>
                    {findFriend.status}    
            
                  </div>
                  <div className="card-actions flex items-center justify-center">
                    {
                        findFriend.tags.map(tag=> {
                            return   <button className="rounded-full px-3 py-3 bg-green-100 text-green-800 text-sm">{findFriend.tags}</button>
                        })
                    }
                  
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">{findFriend.bio}</p>
                    <br></br>
                    <p className="text-gray-600 text-sm">Preffered:{findFriend.email}</p>
                  </div> 
                  </div>


                

            
            
              </div>

              <div className="card bg-base-100 w-90 shadow-sm rounded-lg container mx-auto px-4 py-4 mt-5 flex justify-center items-center">
                <div className="flex gap-3">
                <img className="flex" src={vectorImg}></img>
                <p className="font-bold">Snooze 2 Weeks</p>
                </div>
              </div>
              <div className="card bg-base-100 w-90 shadow-sm rounded-lg container mx-auto px-4 py-4 mt-5 flex justify-center items-center">
                <div className="flex gap-3">
                <img className="flex" src={archiveImg}></img>
                <p className="font-bold">Archive</p>
                </div>
              </div>
              <div className="card bg-base-100 w-90 shadow-sm rounded-lg container mx-auto px-4 py-4 mt-5 flex justify-center items-center">
                <div className="flex gap-3">
                <img className="flex" src={trashImg}></img>
                <p className="font-bold text-red-400">Delete</p>
                </div>
              </div>

              </div>

<div>
              <div className="flex gap-5 pt-4">
        <div className="card bg-base-100 w-70 shadow-sm rounded-lg container mx-auto px-4 py-8 mt-5 flex justify-center items-center">
        
                 <h2 className="font-bold text-xl">{findFriend.days_since_contact}</h2>
                <p className=" text-gray-600">Days Since Contact</p>
                 </div>


        <div className="card bg-base-100 w-70 shadow-sm rounded-lg container mx-auto px-4 py-8 mt-5 flex justify-center items-center">
        
                 <h2 className="font-bold text-xl">{findFriend.goal}</h2>
                <p className=" text-gray-600">Goal (Days)</p>
                 </div>
        <div className="card bg-base-100 w-70 shadow-sm rounded-lg container mx-auto px-4 py-8 mt-5 flex justify-center items-center">
        
                 <h2 className="font-bold text-xl">{findFriend.next_due_date}</h2>
                <p className=" text-gray-600">Next Due</p>
                 </div>
 </div>




                 <div>
                 <div className="card bg-base-100 w-160 shadow-sm rounded-lg container mx-auto px-10 py-8 mt-5 flex justify-center items-center">
        <div className="flex justify-between items-center space-x-100">
        <h2 className="font-bold text-xl">Relationship Goal</h2>
        <button className="btn">Edit</button>
        </div>
        <div className="pr-115">
       <p className=" text-gray-600 ">Connect every {findFriend.goal} days</p>
        </div>
      
       
       
</div>
<div className="card bg-base-100 w-160 h-60 shadow-sm rounded-lg container mx-auto px-10 py-8 mt-5 flex justify-center items-center">
        <h2 className="font-bold text-xl  pr-90">Quick Check-In</h2>

        <div className="flex gap-5">
        <div onClick={()=> handleCall("Call")} className=" card bg-base-200 w-40 shadow-sm rounded-lg container mx-auto px-4 py-8 mt-5 flex justify-center items-center">
        
        <img src={callImg}></img>
       <p className=" text-gray-600">Call</p>
       
        </div>
        <div onClick={()=> handleText("Text")} className="card bg-base-200 w-40 shadow-sm rounded-lg container mx-auto px-4 py-8 mt-5 flex justify-center items-center">
        
        <img src={textImg}></img>
       <p className=" text-gray-600">Text</p>
        </div>
        <div onClick={()=> handleVideo("video")} className="card bg-base-200 w-40 shadow-sm rounded-lg container mx-auto px-4 py-8 mt-5 flex justify-center items-center">
        
        <img src={videoImg}></img>
       <p className=" text-gray-600">Video</p>
        </div>

        </div>
        </div>

</div>
         
       
                 </div>
       
                 </div>
                 </div>
      
        
    )
}
export default CardDetails;