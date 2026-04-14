import React from "react";
import { Link } from "react-router";

const Card = ({friend}) => {
    return(
        <div>
<Link to={`/carddetails/${friend.id}`} className="card bg-base-100 w-80 shadow-sm rounded-lg container mx-auto ">
                <figure>
                  <img className="rounded-full mt-7"
                    src={friend.picture}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold text-3xl flex items-center justify-center">{friend.name}</h2>
                  <p className="flex items-center justify-center text-xl text-gray-600">{friend.days_since_contact}</p>
                  <div className="card-actions flex items-center justify-center">
                    {
                        friend.tags.map(tag=> {
                            return   <button className="rounded-full px-3 py-3 bg-green-100 text-green-800">{friend.tags}</button>
                        })
                    }
                  
                  </div>
                   <div
                    className= {`rounded-full px-3 mx-20 py-3 text-center
                   ${friend.status === "on-track" ? "bg-green-800 text-white" : friend.status === "overdue" ? "bg-red-500 text-white" :
                        friend.status === "almost due" ? "bg-[#EFAD44] text-white" : ""}` }>
                    {friend.status}    
            
                  </div>
                </div>
              </Link>
        </div>
    )
}
export default Card;