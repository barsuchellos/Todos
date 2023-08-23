import { Component } from 'react'
import styles from './modal.module.scss'
import MyButton from '../MyButton/MyButton';
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
    render() {
        const { closeModal, deleteList } = this.props;

        return createPortal(
            (
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <div>
                            <p>Are you sure?</p>
                            <span className={styles.modalClose} onClick={closeModal}>X</span>
                        </div>
                        <div>
                            <MyButton name='Yes' addToDo={deleteList} />
                            <MyButton name='No' addToDo={closeModal} />
                        </div>

                    </div>
                </div>


            ), modalRoot
        )
    }
}

export default Modal;