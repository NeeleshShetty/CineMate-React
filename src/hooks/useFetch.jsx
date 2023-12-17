import  { useEffect, useState } from 'react'

export const useFetch = (apiPath,query="") => {
    const [data,setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=c7dcbcc160c6e3bb01101110d10b987a&query=${query}`;
    
    useEffect(() => {
        async function fetchData(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchData();
        }, [url])
  return {data};
}
