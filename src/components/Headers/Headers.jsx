import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Headers.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClover } from '@fortawesome/free-solid-svg-icons';

export const Headers = () => {
   return (
      <header id="header">
         <ul className={styles.headerUl}>
            <li>
               <span className={styles.logoName}>
                  ANime Base
                  <FontAwesomeIcon icon={faClover} />
               </span>
            </li>
            <li>
               <Link className={styles.headerUlLink} to="/">
                  Anime
               </Link>
            </li>
            <li>
               <Link className={styles.headerUlLink} to="/Trending">
                  Top 10 Trending Anime
               </Link>
            </li>
            <li>
               <Link className={styles.headerUlLink} to="/Test">
                  About
               </Link>
            </li>
         </ul>
      </header>
   );
};
