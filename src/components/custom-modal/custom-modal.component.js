import React from 'react';

import './custom-modal.styles.scss';

const Modal = ({ show, handleClose, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {show ? children : null}
                <div className='modal-button' onClick={handleClose}>OK</div>
            </section>
        </div>
    );
};

export default Modal;