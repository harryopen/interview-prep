import React, { useState } from "react";
interface TabType {
  lable: string;
  content: React.ReactNode;
}
interface ChildTabsProps {
  tabContent: TabType[];
}

const ChildTabs = ({ tabContent }: ChildTabsProps) => {
  const [currentIndex,setCurrentIndex] = useState<number>(0)
  const handleClick =(getIndex:number)=>{
    setCurrentIndex(getIndex)
  }
  return (
    <>
      {/* create the tabs */}
      {tabContent.length &&
        tabContent.map((tabs, index) => {
          return (
            <button onClick={()=>handleClick(index)} key={tabs.lable}className="px-6 py-2 rounded-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
              {tabs.lable}
            </button>
          );
        })}
      {/*Tab content*/}
      <div className="w-full h-full">{tabContent[currentIndex].content}</div>
    </>
  );
};

export default ChildTabs;
