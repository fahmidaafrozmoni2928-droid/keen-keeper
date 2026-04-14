import React from "react";
import { useLoaderData, useParams } from "react-router";

const CardDetails = () => {

    const {id} = useParams();
    console.log(id);

    const friends = useLoaderData();
    console.log(friends);

    const findFriend = friends.find(friend => friend.id == id);
    console.log(findFriend);
    return(
        <div>
         <div  className="card bg-base-100 w-80 shadow-sm rounded-lg container mx-auto ">
                <figure>
                  <img className="rounded-full mt-7"
                    src={findFriend.picture}
                    alt={findFriend.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold text-3xl flex items-center justify-center">{findFriend.name}</h2>
                  <p className="flex items-center justify-center text-xl text-gray-600">{findFriend.days_since_contact}</p>
                  <div className="card-actions flex items-center justify-center">
                    {
                        findFriend.tags.map(tag=> {
                            return   <button className="rounded-full px-3 py-3 bg-green-100 text-green-800">{findFriend.tags}</button>
                        })
                    }
                  
                  </div>
                   <div
                    className= {`rounded-full px-3 mx-20 py-3 text-center
                   ${findFriend.status === "on-track" ? "bg-green-800 text-white" : findFriend.status === "overdue" ? "bg-red-500 text-white" :
                        findFriend.status === "almost due" ? "bg-[#EFAD44] text-white" : ""}` }>
                    {findFriend.status}    
            
                  </div>
                </div>
              </div>
        </div>
    )
}
export default CardDetails;