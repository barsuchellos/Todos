import { Component } from "react";
import styles from './myButton.module.scss';

class Button extends Component {
    render() {
        const { onClick, text } = this.props;

        return (
            text && <button onClick={onClick} className={styles.myButton}>{text}</button>
        )
    }
}

export default Button;