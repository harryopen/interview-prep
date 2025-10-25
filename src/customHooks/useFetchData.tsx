import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetchData = <T,> (url:string) => {
  const [data,setData] = useState<T | null>(null);
  const [error,setError] = useState<boolean>(false);
  const [loading,setLoading] = useState<boolean>(false);

  const fetchData =async()=>{
    try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
    } catch (error:any) {
        console.error("something went wrong",error);
        setError(true);
    }
    finally{
        setLoading(false);
    }
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
     {data,error,loading}
  )
}

export default useFetchData