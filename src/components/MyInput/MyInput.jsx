import { Component } from "react";
import styles from './MyInput.module.scss'

class MyInput extends Component {
    constructor(props) {
        super(props)
        this.setValue = this.setValue.bind(this);
    }

    setValue(e) {
        this.setState({ inputValue: e.target.value });
        this.props.setArr(e.target.value);
    }
        render() {
            const { task, onKeyPress } = this.props

            return (
                <div className={styles.myInputCase}>
                    <p className={styles.myInputCaseTaskName}>{task}</p>
                    <input
                        type="text"
                        placeholder="Write your task"
                        className={styles.myInputCaseInput}
                        onChange={this.setValue}
                        value={this.props.inputValue}
                        onKeyPress={onKeyPress}
                    />
                </div>
            );
        }
    }

export default MyInput;