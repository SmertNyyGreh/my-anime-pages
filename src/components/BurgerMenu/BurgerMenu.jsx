import React, { useState } from 'react';
import styles from './BurgerMenu.module.scss';

export const BurgerMenu = ({ openBurgerMenu }) => {
   const [open, setOpen] = useState('false');
   const changeClass = (e) => {
      setOpen(!open);
      e.stopPropagation()
   };
   return (
      <div className={styles.iconBurgerMenu}>
         <div
            className={`${styles.iconBurgerMenu} ${
               !open ? styles.change : null
            }`}
            onClick={(e)=> changeClass(e) }
         >
            <div className={`${styles.bar1}`}></div>
            <div className={`${styles.bar2}`}></div>
            <div className={`${styles.bar3}`}></div>
         </div>
         <div className={`${styles.contentBurgerMenu}  ${!open ? styles.active : null }`}></div>
      </div>
   );
};
