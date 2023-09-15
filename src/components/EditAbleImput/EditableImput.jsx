import { Component } from 'react'
import styles from './styles.module.scss'
import Button from '../Button/Button'


class EditAbleImput extends Component {
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
        
        // add updateList

        const { inputValue } = this.state
        const {index, saveItem, updateList} = this.props;
        return (
            <>
                <input className={styles.item} value={inputValue} onChange={this.setValue} type='text' />
                <div>
                    <Button
                        text='Save'
                        className={styles.saveButton}
                        onClick={() => saveItem(index, inputValue)}
                    />
                </div>

            </>

        );
    }
}

export default EditAbleImput;