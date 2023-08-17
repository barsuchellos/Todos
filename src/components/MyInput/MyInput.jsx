import { Component } from "react";
import styles from './MyInput.module.scss'

class MyInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
        }

        this.setValue = this.setValue.bind(this);
    }

    setValue(val) {
        this.setState({ inputValue: val.target.value })
        this.props.setArr(val.target.value)
    }

    render() {
        return (
            <div className={styles.myInputCase}>
                <p className={styles.myInputCaseTaskName}>{this.props.task}</p>
                <input
                    type="text"
                    placeholder="Write your task"
                    className={styles.myInputCaseInput}
                    onChange={this.setValue}
                    value={this.state.inputValue}
                    onKeyPress={this.props.onKeyPress}
                />
            </div>
        );
    }
}

export default MyInput;