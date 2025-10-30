import React, { createContext, useState } from 'react'
import ChildContextApi from './ChildContextApi';
export interface contextType {
    level:string;
     setLevel: React.Dispatch<React.SetStateAction<string>>;
}
 export const myContext = createContext<contextType|null>(null);
const TestContextLogic = () => {
  const[level,setLevel] = useState<string>("DB");
 
  return (
    <myContext.Provider value={{level,setLevel}}>
       <ChildContextApi/>
    </myContext.Provider>
    
  )
}

export default TestContextLogic