import React from 'react';

import styles from './Button.module.scss';

export const Button = ({ clickTrueModal, children, isPink = false }) => {
   return <button className={`${styles.buttonyellow} ${isPink && styles.buttonAqua}`}>{children}</button>;
};
