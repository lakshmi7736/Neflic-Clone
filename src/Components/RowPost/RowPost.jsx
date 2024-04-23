import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from '../../axios';
import {API_KEY, imageUrl } from '../../Constants/Constants';
import YouTube from 'react-youtube';


const RowPost = (props) => {

  // useState,useEffect for movies
  const [movies,setMovies]= useState([]);
  useEffect(() => {
    axios.get(props.url)
    .then(response=>{
      setMovies(response.data.results);
    }).catch(err=>{
      alert("Unauthorized");
    })
  }, []);

  // to play video of movie by clicking
  const opts={
    heigth:'390',
    width:'100%',
    playerVars:{
      autoplay:1,
    },
  };

  // handle movie trailer view
  const [urlId,setUrlId] =useState('');
  const handleMovie=(id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(reponse=>{
      console.log(reponse.data)
      if(reponse.data.results.legth!==0){
        setUrlId(reponse.data.results[0])
      }
    })
  }


  return (
    <div className='row'>  
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
          <img onClick={()=>{
            handleMovie(obj.id)
          }} className={props.isSmall? 'small-poster':'poster' }alt='poster' src={`${imageUrl+obj.backdrop_path}`} />        
        )}
      </div>
  
      {urlId &&  <YouTube opts={opts} videoId={urlId.key} /> }
     
    </div>
  )
}

export default RowPost
