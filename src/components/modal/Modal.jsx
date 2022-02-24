import React from 'react'

import './modal.scss'

function Modal(props) {
  return (
    <div className='modal'>
        <div className="modal__window">
            <div className="modal__window-close">
                X
            </div>
            {props.children}
        </div>
    </div>
  )
}

export default Modal