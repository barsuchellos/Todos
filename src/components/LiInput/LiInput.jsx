import { Component } from 'react'
import styles from './styles.module.scss'
import MyButton from '../MyButton/MyButton'
class LiInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: this.props.value || ''
        }
        this.setValue = this.setValue.bind(this);
    }

    setValue = (e) => {
        this.setState({ inputValue: e.target.value })
        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
        this.props.setItem(e.target.value)
    }

    render() {
        const { inputValue } = this.state
        const {index, saveItem} = this.props;
        console.log(inputValue);
        return (
            <>
                <input className={styles.item} value={inputValue} onChange={this.setValue} type='text' />
                <div>
                    <MyButton
                        name='Save'
                        className={styles.saveButton}
                        addToDo={() => saveItem(index, inputValue)}
                    />
                </div>

            </>

        );
    }
}

export default LiInput;