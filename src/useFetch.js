import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(()=>{
      //   setTimeout(() => {
            const abortCont = new AbortController();      

            fetch(url,{signal: abortCont.signal})
              .then(res =>{
                  if (!res.ok) {
                      throw Error('could not fetch the data from that resourse');
                  }
                  return res.json();
              })
              .then((data)=>{
                  setError(null);
                  setData(data);
                  setIsLoading(false);
              })
              .catch(err =>{
                  if (err.name === 'AbortError') {
                      console.log('fetch aborted');
                  }else{
                      setError(err.message);
                      setIsLoading(false);
                  }
              });
      //   }, 3000);
              return ()=> abortCont.abort();

    },[url]);

    return {data,isLoading,error};
}
 
export default useFetch;