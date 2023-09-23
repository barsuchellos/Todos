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
        
        const { list, setItem, showEditInputIndex } = this.props;

        return (
            <ul className={styles.list}>
                {list.map((el, index) =>
                    <div className={styles.listItemContainer}>
                        <li className={styles.listItem} key={index}>{`${index + 1}.${el}`}</li>
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
                        </div>
                    </div>
                )}
            </ul>
        );
    }
};

export default Mylist;