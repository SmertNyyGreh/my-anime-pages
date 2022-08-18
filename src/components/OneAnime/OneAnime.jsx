import React, {useEffect} from 'react';

export const OneAnime = () => {
   useEffect(()=>{
      fetch('https://kitsu.io/api/edge/anime/11/characters').then((res)=>res.json()).then((data)=>console.log(data.data))
   },[])
   return (
      <>
         <div>OneAnime</div>
         <div>OneAnime</div>
      </>
   );
};
