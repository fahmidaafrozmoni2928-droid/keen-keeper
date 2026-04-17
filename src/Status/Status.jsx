import React, { useContext } from "react";
import { data } from "react-router";
import { Cell, Pie, PieChart } from "recharts";
import Calllist from "../Calllist/Calllist";
import Textlist from "../Textlist/Textlist";
import Videolist from "../Videolist/Videolist";
import { callContext } from "../CallProvider/CallProvider";

const Status = () => {
   const {call} = useContext(callContext);
   const callList = call.filter(c=> c.type === "Call");
   const textList = call.filter(c=> c.type === "Text");
   const videoList = call.filter(c=> c.type === "Video");
    const data = [
        {name:"Call", value:callList.length},
        {name:"Text", value:textList.length},
        {name:"Video", value:videoList.length}
        
    ]

    const dataFilter = data.filter(d => d.value > 0);
    const getColor = (type) => {
        if (type === "call") return "#1F2937";
        if(type === "text") return "#7C3AED";
        if(type === "video") return "#22C55E";
    };
    return(

     
        dataFilter.length === 0 ? (<h2 className="text-center text-xl text-gray-600">No interactions logged yet</h2>) :
        (
            
<div className="">
<h1 className="font-bold text-3xl container mx-auto">Friendship Analytics</h1>
<div className="w-120 card bg-base-100  shadow-lg rounded-lg container mx-auto px-4 py-4 mt-5 flex justify-center items-center lg:w-250">
<h3 className="pr-70 font-bold lg:pr-200">By Interaction Type</h3>
<PieChart width={300} height={300}>
<Pie data={data} dataKey="value" nameKey="name" outerRadius={100} innerRadius={80}>
    {data.map((entry,index) => (
        <Cell key={index} fill={getColor(entry.name.toLowerCase())}></Cell>
    ))}
</Pie>
</PieChart>
<div className="flex gap-3">
<div className="flex items-center gap-2">
<p className="bg-[#1F2937] px-2 py-2"></p>
<p className="text-xl font-semibold">Call</p>
</div>
<div className="flex items-center gap-2">
<p className="bg-[#7C3AED] px-2 py-2"></p>
<p className="text-xl font-semibold">Text</p>
</div>
<div className="flex items-center gap-2">
<p className="bg-[#22C55E] px-2 py-2"></p>
<p className="text-xl font-semibold">Video</p>
</div>
</div>
</div>
</div> 
        )
     
       
    )
}
export default Status;