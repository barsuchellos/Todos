import React, { Component } from 'react';
import styles from './MyList.module.scss'
import Button from '../Button/Button';
import EditAbleImput from '../EditAbleImput/EditableImput';

class Mylist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            setItem: ''
        }
    }

    deleteItem = (index) => {
        this.props.list.splice(index, 1)
        this.props.updateList(this.props.list);
        this.setState({ showEditInputIndex: null })
    }

    saveItem = (index, newValue) => {
        console.log(newValue);
        const newList = [...this.props.list];
        newList.splice(index, 1, newValue)
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
                            <EditAbleImput
                                value={el}
                                setItem={setItem}
                                onChange={(value) => this.saveItem(index, value)}
                                saveItem={this.saveItem}
                                updateList={this.props.updateList}
                            />}
                        <div>
                            <Button text='Delete' onClick={() => this.deleteItem(index)} key={index + 1} />
                            <Button text='Edit' onClick={() => editItem(index)} key={index + 5} />
                        </div>
                    </div>
                )}
            </ul>
        );
    }
};

export default Mylist;