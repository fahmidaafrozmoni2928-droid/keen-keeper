import React from "react";

const Banner = () => {
    return(
        <div>
   <div className="hero bg-base-200  pb-40 pt-20 ">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="ml-25 text-5xl font-bold lg:ml-0">Friends to keep close in your life</h1>
      <p className="ml-25 py-6 text-gray-600 lg:ml-0">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br>
      relationships that matter most.
      </p>
      <button className="ml-25 btn bg-green-800 text-white lg:ml-0">+ Add a Friend</button>

<div className=" bg-base-200 space-y-5    p-6 lg:flex justify-center items-center gap-5 space-y-0">
<div className="bg-base-100 ml-35 p-4 rounded-xl shadow-md w-60 text-center lg:ml-0">
        <h2 className="text-3xl font-bold">10</h2>
        <p className="text-gray-600">Total Friends</p>
    </div>
      
<div className="bg-base-100 ml-35 p-4 rounded-xl shadow-md w-60 text-center lg:ml-0">
        <h2 className="text-3xl font-bold">3</h2>
        <p className="text-gray-600">On Track</p>
    </div>
<div className="bg-base-100 ml-35 p-4 rounded-xl shadow-md w-60 text-center lg:ml-0">
        <h2 className="text-3xl font-bold">6</h2>
        <p className="text-gray-600" >Need Attention</p>
    </div>
<div className="bg-base-100 ml-35 p-4 rounded-xl shadow-md w-60 text-center lg:ml-0 ">
        <h2 className="text-3xl font-bold">12</h2>
        <p  className="text-gray-600" >Interactions This Month</p>
        
    </div>

    

    </div>
    </div> 
  </div>

</div>






        </div>
    )
}
export default Banner;