import React, { useContext } from "react";
import { myContext, } from "./TestContextLogic";

const ChildContextApi = () => {
const {level,setLevel} = useContext(myContext)
  console.log("log level",level)
  return <button onClick={()=>setLevel("BDSR")} className="bg-blue-300 rounded-4xl h-6 w-auto">
    click to change the Level
  </button>
};

export default ChildContextApi;
