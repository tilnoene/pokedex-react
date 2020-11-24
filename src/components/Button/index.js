import React from 'react';

import style from './styles.css';

const Button = ({ title, styles="btn", onClick=null, warning=false }) => {
    if(warning) styles += " red";

    return (
      <button className={styles} onClick={onClick}>{title}</button>
    );
};

export default Button;