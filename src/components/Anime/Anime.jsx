import React, { useState, useEffect } from 'react';
import styles from './Anime.module.scss';

export const Anime = () => {
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
            <div>
               {nameAnime.map((item) => (
                  <div className={styles.AnimeCard} key={item.id}>{item.attributes.posterImage.original}</div>
               ))}
            </div>
            <button
               disabled={page === 0 ? true : false}
               onClick={() => setPage(page - 20)}
            >
               pref
            </button>
            <button onClick={() => setPage(page + 20)}>next</button>
         </div>
      </div>
   );
};
