import React, { use } from "react";
import Card from "../Card/Card";

const friendsPromise = fetch("friends.json").then(res => res.json());
const AllCards = () => {
    const friends = use(friendsPromise);
    return(
<div className="bg-base-200 ">
    
    <div className="pl-5 ">
    <h2 className="font-bold- text-4xl">Your Friends</h2>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 space-x-4 bg-base-200 w-full mt-5">
           {
            friends.map(friend=> {
                return <Card friend={friend}></Card>
            }
                 )
           }
        </div>
        </div>
    )
}
export default AllCards;