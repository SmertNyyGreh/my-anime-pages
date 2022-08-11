import React, { useState, useEffect } from 'react';
import styles from './Test.module.scss';

export const Test = () => {
   const url = 'https://kitsu.io/api/edge';
   const [nameAnime, setNameAnime] = useState([]);
   const [page, setPage] = useState(0);

   useEffect(() => {
      fetch(`${url}/anime?page[limit]=10&page[offset]=${page}`)
         .then((resposne) => resposne.json())
         .then((data) => setNameAnime(data.data));
      // .then((data) => console.log(data.data));
   }, [page]);

   return (
      <div className={styles.mainConteiner}>
         <div className={styles.containsAnimeList}>
            {nameAnime.map((item) => (
               <div className={styles.AnimeCard} key={item.id}>
                  <img
                     src={item.attributes.posterImage.small}
                     className={styles.AnimeCoverImage}
                     alt=""
                  />
               </div>
            ))}
            <button
               disabled={page === 0 ? true : false}
               onClick={() => setPage(page - 10)}
            >
               pref
            </button>
            <button onClick={() => setPage(page + 10)}>next</button>
         </div>
      </div>
   );
};
