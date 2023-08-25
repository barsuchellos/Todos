import React, { Component } from 'react';
import styles from './MyList.module.scss'
import MyButton from '../MyButton/MyButton';
import LiInput from '../LiInput/LiInput';

class Mylist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            setItem: ''
        }
    }



    deleteItem = (index) => {
        const newList = this.props.list.filter((_, i) => i !== index)
        this.props.updateList(newList);
        this.setState({ showEditInputIndex: null })
    }

    saveItem = (index, newValue) => {
        const newList = [...this.props.list];
        newList[index] = newValue;
        this.props.updateList(newList);
        this.setState({ showEditInputIndex: null });
    }


    render() {

        const { list, setItem, showEditInputIndex, editItem } = this.props;
        return (
            <ul className={styles.list}>
                {list.map((el, index) =>
                    <div className={styles.listItemContainer}>
                        <li className={styles.listItem} key={index}>{el}</li>
                        {showEditInputIndex === index &&
                            <LiInput
                                value={el}
                                setItem={setItem}
                                onChange={(value) => this.props.updateListItem(index, value)}
                                saveItem={this.saveItem}
                            />}
                        <div>
                            <MyButton name='Delete' addToDo={() => this.deleteItem(index)} key={index + 1} />
                            <MyButton name='Edit' addToDo={() => editItem(index)} key={index + 5} />
                        </div>
                    </div>
                )}
            </ul>
        );
    }
};

export default Mylist;