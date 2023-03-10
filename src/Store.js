import { createContext} from "react";
import  Axios  from 'axios';
import React from 'react'
import {useState , useEffect} from 'react';
export let moviesContext = createContext(0);

export function MoviesContextProvider(props){

    const [trendingTv , setTrendingTv] = useState([]);
    const [trendingMovies , SetTrendingMovies] = useState([]);
    const [trendingPeople , setTrendingPeople] = useState([]);
  
  
    async function getTrending(mediaType , callback)
    {
      let {data} = await Axios.get(`https:/api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
      callback(data.results.slice(0,10));
    }
  
  useEffect(()=>{
    getTrending('movie' , SetTrendingMovies);
    getTrending('person' , setTrendingPeople);
    getTrending('tv' , setTrendingTv);
  },[]);

    return( 
        <moviesContext.Provider value={{trendingMovies,trendingTv,trendingPeople}}>
            {props.children}
        </moviesContext.Provider>
    )
}