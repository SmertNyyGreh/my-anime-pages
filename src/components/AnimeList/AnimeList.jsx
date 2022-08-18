import React, { useState, useEffect } from 'react';
import styles from './AnimeList.module.scss';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const AnimeList = () => {
   const url = 'https://kitsu.io/api/edge';
   const [nameAnime, setNameAnime] = useState([]);
   const [page, setPage] = useState(0);
   const [genres, setGenres] = useState('');

   useEffect(() => {
      fetch(
         `${url}/anime?page[limit]=10&page[offset]=${page}&${
            genres && `filter[genres]=${genres}`
         }`,
         {
            headers: {
               Accept: 'application/vnd.api+json',
               'Content-Type': 'application/vnd.api+json',
            },
         }
      )
         .then((resposne) => resposne.json())
         .then((data) => setNameAnime(data.data));
      // .then((data) => console.log(data.data));
   }, [page, genres]);

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };
   const onClickPrevBtn = () => {
      setPage(page - 10);
      scrollTop();
   };
   const onClickNextBtn = () => {
      setPage(page + 10);
      scrollTop();
   };
   const ascSort = () => {
      const sortedAnime = nameAnime.sort((a, b) =>
         a.attributes.slug > b.attributes.slug
            ? 1
            : a.attributes.slug < b.attributes.slug
            ? -1
            : 0
      );
      setNameAnime([...sortedAnime]);
   };
   const handleChange = (e) => {
      setGenres(e.target.value);
      setPage(0);
   };

   return (
      <main className={styles.mainConteiner}>
         <aside className={styles.asideContainer}>
            <div className={styles.containerDesription}>
               <p className={styles.pDescriptionAside}>
                  <span className={styles.logoName}>Anime Base</span>
                  <span> is one</span>
                  <br />
                  <span> of the best sites to find</span>
                  <br />
                  <span> anime and build your</span>
                  <br /> <span>own collection</span>
               </p>
            </div>
            <div className={styles.optionButtonContainer}>
               <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                     Genre
                  </InputLabel>
                  <Select
                     labelId="demo-simple-select-standard-label"
                     id="demo-simple-select-standard"
                     value={genres}
                     onChange={handleChange}
                     label="Genres"
                  >
                     <MenuItem value={'Action'}>Action</MenuItem>
                     <MenuItem value={'Adventure'}>Adventure</MenuItem>
                     <MenuItem value={'Comedy'}>Comedy</MenuItem>
                     <MenuItem value={'Drama'}>Drama</MenuItem>
                     <MenuItem value={'Space'}>Space</MenuItem>
                     <MenuItem value={'Mystery'}>Mystery</MenuItem>
                     <MenuItem value={'Magic'}>Magic</MenuItem>
                     <MenuItem value={'Supernatural'}>Supernatural</MenuItem>
                     <MenuItem value={'Police'}>Police</MenuItem>
                     <MenuItem value={'Fantasy'}>Fantasy</MenuItem>
                     <MenuItem value={'Sports'}>Sports</MenuItem>
                     <MenuItem value={'Romance'}>Romance</MenuItem>
                     <MenuItem value={'Cars'}>Cars</MenuItem>
                     <MenuItem value={'Slice of Life'}>Slice of Life </MenuItem>
                     <MenuItem value={'Racing'}>Racing</MenuItem>
                     <MenuItem value={'Horror'}>Horror</MenuItem>
                     <MenuItem value={'Psychological'}>Psychological</MenuItem>
                     <MenuItem value={'Thriller'}>Thriller</MenuItem>
                     <MenuItem value={'Martial Arts'}>Martial Arts</MenuItem>
                     <MenuItem value={'Super Power'}>Super Power</MenuItem>
                     <MenuItem value={'School'}>School</MenuItem>
                     <MenuItem value={'Ecchi'}>Ecchi</MenuItem>
                     <MenuItem value={'Vampire'}>Vampire</MenuItem>
                     <MenuItem value={'Game'}>Game</MenuItem>
                  </Select>
               </FormControl>
               <div className={styles.test}>
               <Button
                  onClick={ascSort}
                  sx={{
                     color: '#75624E',
                     maxHeight: 30,
                     maxWidth: 64,
                     position: 'absolute',
                     right: 10,
                     bottom: 5,
                  }}
                  size="small"
               >
                  A-Z
               </Button>
               </div>
            </div>
         </aside>
         <div className={styles.averageContent}>
            <div className={styles.conteinerAnimeList}>
               {nameAnime.map((item) => (
                  <div className={styles.contantAnimeList} key={item.id}>
                     <section className={styles.AnimeCard}>
                        <div className={styles.blockNameAnime}>
                           <p className={styles.pNameAnime}>
                              {item.attributes.titles.en === undefined
                                 ? item.attributes.titles['en_jp']
                                 : item.attributes.titles.en}
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
                              <span className={styles.spanTextContent}>
                                 Type:
                              </span>{' '}
                              {item.attributes.subtype}
                           </p>
                           <p className={styles.pTextContent}>
                              <span className={styles.spanTextContent}>
                                 Average Rating:
                              </span>{' '}
                              {item.attributes.averageRating}
                              {'%'}
                           </p>
                           <p className={styles.pSynopsis}>
                              {item.attributes.synopsis}
                           </p>
                        </div>
                     </section>
                  </div>
               ))}
               <div className={styles.divButtonChangePage}>
                  <Button
                     sx={{
                        height: '29px',
                        backgroundColor: '#FEB86E',
                        color: '#FF5900',
                        border: 'solid 1px orange',
                        margin: '10px',
                        borderRadius: '12px',
                        position: 'reletive',
                     }}
                     onClick={onClickPrevBtn}
                     disabled={page === 0 ? true : false}
                     variant="contained"
                  >
                     <div><FontAwesomeIcon icon={faAngleLeft} /></div> Previous page
                  </Button>
                  <Button
                     sx={{
                        height: '29px',
                        backgroundColor: '#FEB86E',
                        color: '#FF5900',
                        border: 'solid 1px orange',
                        margin: '10px',
                        borderRadius: '12px',
                        position: 'reletive',
                     }}
                     onClick={onClickNextBtn}
                     variant="contained"
                  >
                     Next page{' '}
                     <div><FontAwesomeIcon icon={faAngleRight} /></div>
                  </Button>
               </div>
            </div>
         </div>
      </main>
   );
};
