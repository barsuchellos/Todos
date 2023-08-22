import React, { Component } from 'react';
import styles from './MyList.module.scss'
import MyButton from '../MyButton/MyButton';

class Mylist extends Component {
    deleteItem = (index) => {
        const newList = this.props.list.filter((_, i) => i !== index)
        this.props.updateList(newList);
    }

    render() {
        const { list } = this.props;
        return (
            <ul className={styles.list}>
                {list.map((el, index) =>
                    <div className={styles.listItemContainer}>
                        <li className={styles.listItem} key={index}>{el}</li>
                        <MyButton name='Delete' addToDo={() => this.deleteItem(index)} key={index + 1} />
                    </div>
                )}
            </ul>
        );
    }
};

export default Mylist;