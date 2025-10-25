import React, { useEffect } from 'react'

const useClickOutside = (ref:React.RefObject<HTMLElement>,callBack:()=>void) => {
 useEffect(()=>{
    const listener=(e:MouseEvent)=>{
        if(ref.current && !ref.current.contains(e.target as Node)){
            callBack();
        }
    }
    document.addEventListener("mousedown",listener);

 },[ref,callBack])
}

export default useClickOutside;