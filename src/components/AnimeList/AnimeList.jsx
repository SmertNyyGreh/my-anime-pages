import React, { useState, useEffect } from 'react';
import styles from './AnimeList.module.scss';

export const AnimeList = () => {
   const url = 'https://kitsu.io/api/edge';
   const [nameAnime, setNameAnime] = useState([]);
   const [page, setPage] = useState(0);

   useEffect(() => {
      fetch(`${url}/anime?page[limit]=10&page[offset]=${page}`)
         .then((resposne) => resposne.json())
         .then((data) => setNameAnime(data.data));
      // .then((data) => console.log(data.data));
   }, [page]);
   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };
   const onClickNextBtn = () => {
      setPage(page + 10);
      scrollTop();
   };
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
                              && `Episodes are still coming out`}
                        </p>
                        <p className={styles.pTextContent}>
                           <span className={styles.spanTextContent}>
                              Age ratting:
                           </span>{' '}
                           {item.attributes.ageRating}
                        </p>
                        <p className={styles.pTextContent}>
                           <span className={styles.spanTextContent}>
                              Genres:
                           </span>{' '}
                        </p>
                        <p className={styles.pTextContent}>
                           <span className={styles.spanTextContent}>Type:</span>{' '}
                           {item.attributes.subtype}
                        </p>
                        <p className={styles.pTextContent}>
                           <span className={styles.spanTextContent}>Average Rating:</span>{' '}
                           {item.attributes.averageRating}{'%'}
                        </p>
                        <p className={styles.pSynopsis}>{item.attributes.synopsis}</p>
                  </div>
               </section>
            ))}
         </div>
         <button
            disabled={page === 0 ? true : false}
            onClick={() => setPage(page - 10)}
         >
            pref
         </button>
         <button onClick={onClickNextBtn}>next</button>
      </main>
   );
};
