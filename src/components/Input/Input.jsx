import { Component } from "react";
import styles from './MyInput.module.scss'

class Input extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.setArr(e.target.value);
    }

    render() {
        const { onChange } = this;
        const { task, onKeyPress, inputValue, placeholder } = this.props;

        return (
            <div className={styles.myInputCase}>
                {task && <p className={styles.myInputCaseTaskName}>{task}</p>}
                <input
                    type="text"
                    placeholder={placeholder}
                    className={styles.myInputCaseInput}
                    onChange={onChange}
                    value={inputValue}
                    onKeyPress={onKeyPress}
                />
            </div>
        );
    }
}

export default Input;