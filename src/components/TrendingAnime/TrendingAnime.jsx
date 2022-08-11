import React, { useState, useEffect } from 'react';
import styles from './TrendingAnime.module.scss';

export const TrendingAnime = () => {
   const url = 'https://kitsu.io/api/edge';
   const [nameAnime, setNameAnime] = useState([]);
   // const [page, setPage] = useState(0);

   useEffect(() => {
      fetch(`${url}/trending/anime?page[limit]=20&page[offset]=20`)
         .then((resposne) => resposne.json())
         .then((data) => setNameAnime(data.data));
      // .then((data) => console.log(data.data));
   }, []);
   return (
      <main className={styles.mainConteiner}>
         <div className={styles.containsAnimeList}>
            {nameAnime.map((item) => (
               <section className={styles.AnimeCard} key={item.id}>
                  <div className={styles.blockNameAnime}>
                     <p className={styles.pNameAnime}>
                        {item.attributes.titles.en === undefined &&
                           item.attributes.titles['en_jp']}
                        {item.attributes.titles.en}
                     </p>
                  </div>
                  <div className={styles.partitionDiv}></div>
                  <div className={styles.contentAnimeCard}>
                     <div>
                        <img
                           src={item.attributes.posterImage.small}
                           className={styles.AnimeCoverImage}
                           alt=""
                        />
                     </div>
                     <p className={styles.pTextContent}>
                        <span className={styles.spanTextContent}>
                           Number of series:
                        </span>{' '}
                        {item.attributes.episodeCount === null
                           ? `Episodes are still coming out`
                           : item.attributes.episodeCount}
                     </p>
                     <p className={styles.pTextContent}>
                        <span className={styles.spanTextContent}>
                           Age ratting:
                        </span>{' '}
                        {item.attributes.ageRating}
                     </p>
                     <p className={styles.pTextContent}>
                        <span className={styles.spanTextContent}>Genres:</span>{' '}
                     </p>
                     <p className={styles.pTextContent}>
                        <span className={styles.spanTextContent}>Type:</span>{' '}
                        {item.attributes.subtype}
                     </p>
                     <p className={styles.pTextContent}>
                        <span className={styles.spanTextContent}>
                           Average Rating:
                        </span>{' '}
                        {item.attributes.averageRating}
                        {'%'}
                     </p>
                     <p
                        className={styles.pSynopsis}
                     >{item.attributes.synopsis}</p>
                  </div>
               </section>
            ))}
         </div>
      </main>
   );
};
