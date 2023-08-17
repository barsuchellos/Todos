import { Component } from "react";
import styles from './myButton.module.scss';

class MyButton extends Component {
    render() {
        return (
            <button onClick={this.props.addToDo} className={styles.myButton}>{this.props.name}</button>
        )
    }
}

export default MyButton;