import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex ">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <img src="./public/assets/Blue-Shape.svg" alt="1st" className="-rotate-45 h-64 md:h-72  lg:[h-400px]" />
        <img src="./public/assets/Pink-Shape.svg" alt="2nd" className="absolute  -rotate-[30deg] h-64  md:h-72  lg:[h-400px]"/>
        <img src="./public/assets/Purple-Shape.svg" alt="3rd" className="absolute -rotate-[15deg] h-64  md:h-72  lg:[h-400px]"/>
        <img src="./public/assets/Hero-Model.png" alt="hero" className="absolute h-64  lg:[h-400px]" />
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight">Host your Website in Less than 5 min</h1>
        <p className="font-lato text-gray-700 ">with Host ,you can run their Website in Less than 5 minwith compelete pricing and packages</p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
            <input className="rounded-md px-4 py-3 placeholder:text-red-400" type="email" placeholder="Enter your address"  />
            <button className="rounded-md px-4 py-3 bg-yellow-400 hover:bg-yellow-600 text-white">  Join waitlist</button>
        </form>
        <div className="flex gap-2">
            <img src="./public/assets/Checkmark.svg" alt="check" />
            <p className="font-lato text-gray-700 ">dont spam ever, unsubscribe anytime if you want.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
