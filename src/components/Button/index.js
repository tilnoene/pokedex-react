import React from 'react';

import style from './styles.css';

const Button = ({ title, styles="btn", onClick }) => {
    return (
      <button className={styles} onClick={onClick}>{title}</button>
    );
};

export default Button;