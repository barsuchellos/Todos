import { Component } from 'react'
import styles from './modal.module.scss'
import Button from '../Button/Button';
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
    render() {
        const { onClose, onDelete, setRef } = this.props;

        return createPortal(
            (
                <div className={styles.overlay} ref={setRef}>
                    <div className={styles.modal}>
                        <div> 
                            <p>Are you sure?</p>
                            <span className={styles.modalClose} onClick={onClose}>X</span>
                        </div>
                        <div>
                            <Button text='Yes' onClick={onDelete} />
                            <Button text='No' onClick={onClose} />
                        </div>

                    </div>
                </div>


            ), modalRoot
        )
    }
}

export default Modal;