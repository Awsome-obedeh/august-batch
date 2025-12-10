"use client"
import Members from "@/components/Members";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [value, setValue]=useState(0)
// function to handle addition
  const handleAdd=()=>{
    setValue(value+1)
  }
// function to handle subraction
  const handleSub=()=>{
    if(value < 1) return 
    setValue(value-1)
  }


  return (
    <div>
      {2 + 2}
      {new Date().toLocaleTimeString()}
      <Navbar />
      <h1>My first next project</h1>

      <div className="grid grid-cols-3 gap-4">

        <Profile name="Obed" sex="Male" age={30} nationality="Nigeria" />
        <Profile name="Dollakpo" sex="Male" age={25} nationality="Ghana" />
        <Profile name="joy" sex="Female" age={28} nationality="Kenya" />
        <Profile name="buikem" sex="Male" age={32} nationality="South Africa" />
        <Profile name="Alex" sex="Male" age={29} nationality="USA" />
        <Profile name="Maria" sex="Female" age={27} nationality="Brazil" />
        <Profile name="Liam" sex="Male" age={31} nationality="Canada" />
        <Profile name="Sophia" sex="Female" age={26} nationality="Australia" />
      </div>

      <Members name="joy" role="nwonye odugwu" bio="A manifesting princess" src="/profile.png"/>
      <Members name="alali" role="go chops" bio="available for deals" src="/joy.jpg"/>
    
    
      <div className="flex gap-x-4 justify-center">
        <button onClick={handleSub} className="px-3 py-2 bg-red-400 text-white">-</button>
          <p>{value}</p>
        <button onClick={handleAdd} className="px-3 py-2 bg-green-400 text-white">+</button>
      </div>
    </div>
  );
}
