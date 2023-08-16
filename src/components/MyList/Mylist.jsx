import React from 'react';
import styles from './MyList.module.scss'

const Mylist = ({list}) => {
    return (
        <ul className={styles.list}>
            {list.map((el,index) => <li className={styles.listItem} key={index}>{el}</li>)}
        </ul>
    );
};

export default Mylist;