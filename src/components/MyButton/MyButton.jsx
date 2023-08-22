import { Component } from "react";
import styles from './myButton.module.scss';

class MyButton extends Component {
    render() {
        const { addToDo, name } = this.props;

        return (
            <button onClick={addToDo} className={styles.myButton}>{name}</button>
        )
    }
}

export default MyButton;