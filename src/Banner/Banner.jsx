import React from "react";

const Banner = () => {
    return(
        <div>
   <div className="hero bg-base-200  pb-40 pt-20 ">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="py-6 text-gray-600">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br>
      relationships that matter most.
      </p>
      <button className="btn bg-green-800 text-white">+ Add a Friend</button>

<div className=" bg-base-200  flex justify-center items-center  gap-5 p-6">
<div className="bg-base-100 p-4 rounded-xl shadow-md w-60 text-center">
        <h2 className="text-3xl font-bold">10</h2>
        <p className="text-gray-600">Total Friends</p>
    </div>
        
<div className="bg-base-100 p-4 rounded-xl shadow-md w-60 text-center">
        <h2 className="text-3xl font-bold">3</h2>
        <p className="text-gray-600">On Track</p>
    </div>
<div className="bg-base-100 p-4 rounded-xl shadow-md w-60 text-center">
        <h2 className="text-3xl font-bold">6</h2>
        <p className="text-gray-600" >Need Attention</p>
    </div>
<div className="bg-base-100 p-4 rounded-xl shadow-md w-60 text-center">
        <h2 className="text-3xl font-bold">12</h2>
        <p  className="text-gray-600" >Interactions This Month</p>
        <hr className="border-gray-200 border "></hr>
    </div>

    

    </div>
    </div> 
  </div>

</div>






        </div>
    )
}
export default Banner;