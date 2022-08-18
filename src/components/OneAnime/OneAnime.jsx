import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './OneAnime.module.scss';

import { url } from '../../url/url';

export const OneAnime = () => {
   const { id } = useParams();

   const [oneAnime, setoneAnime] = useState({});
   const [genres, setGenres] = useState([]);

   useEffect(() => {
      fetch(`${url}/anime/${id}`)
         .then((res) => res.json())
         .then((data) => setoneAnime(data.data));
      // .then((data) => console.log(data.data));
   }, [id]);

   useEffect(() => {
      fetch(`${url}/anime/${id}/genres`)
         .then((res) => res.json())
         .then((data) => setGenres(data.data));
      // .then((data) => console.log(data.data));
   }, [id]);
   return (
      <>
         <main className={styles.mainConteiner}>
            <div className={styles.averageContent}>
               <div className={styles.conteinerAnimeList}>
                  <div className={styles.contantAnimeList} key={oneAnime?.id}>
                     <section className={styles.AnimeCard}>
                        <div className={styles.blockNameAnime}>
                           <p className={styles.pNameAnime}>
                              {oneAnime?.attributes?.titles.en === undefined
                                 ? oneAnime?.attributes?.titles['en_jp']
                                 : oneAnime?.attributes?.titles.en}
                           </p>
                        </div>
                        <div className={styles.partitionDiv}></div>
                        <div className={styles.contentAnimeCard}>
                           <div>
                              <img
                                 src={oneAnime?.attributes?.posterImage?.small}
                                 className={styles.AnimeCoverImage}
                                 alt=""
                              />
                           </div>
                           <p className={styles.pTextContent}>
                              <span className={styles.spanTextContent}>
                                 Number of series:
                              </span>{' '}
                              {oneAnime?.attributes?.episodeCount === null
                                 ? `Episodes are still coming out`
                                 : oneAnime?.attributes?.episodeCount}
                           </p>
                           <div className={styles.divGenres}>
                              <span
                                 className={`${styles.spanTextContent} ${styles.spanGenres}`}
                              >
                                 Genres: &nbsp;
                              </span>
                              {genres.map((item) => (
                                 <p>{item?.attributes?.name}&nbsp;</p>
                              ))}
                           </div>
                           <p className={styles.pTextContent}>
                              <span className={styles.spanTextContent}>
                                 Age ratting:
                              </span>{' '}
                              {oneAnime?.attributes?.ageRating}
                           </p>
                           <p className={styles.pTextContent}>
                              <span className={styles.spanTextContent}>
                                 Type:
                              </span>{' '}
                              {oneAnime?.attributes?.subtype}
                           </p>
                           <p className={styles.pTextContent}>
                              <span className={styles.spanTextContent}>
                                 Average Rating:
                              </span>{' '}
                              {oneAnime?.attributes?.averageRating}
                              {'%'}
                           </p>
                           <p className={styles.pSynopsis}>
                              {oneAnime?.attributes?.synopsis}
                           </p>
                        </div>
                     </section>
                  </div>
                  <div className={styles.divButtonChangePage}></div>
               </div>
            </div>
            <aside className={styles.asideAdditionalInformation}>
               <div className={styles.containerAsideContent}>
                  <p className={styles.pNameBlockAside}>
                     Additional information about this anime
                  </p>
               </div>
               <div className={styles.containerAsideContent}>
                  <p className={styles.pTextInformation}>
                     This anime has been added to the site:{' '}
                     {oneAnime?.attributes?.createdAt}
                  </p>
               </div>
            </aside>
         </main>
      </>
   );
};
