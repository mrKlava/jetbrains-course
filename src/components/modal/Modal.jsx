import React from 'react'

import './modal.scss'

function  Modal(props) {
  const active = props.active

  function handleClose(e) {
    props.liftClose(e)
  }

  return (
    <div className={!active ? 'modal' : 'modal active'} >
        <div className="modal__window">
            <div className="modal__window-close" onClick={handleClose}>
                X
            </div>
            {props.children}
        </div>
    </div>
  )
}

export default Modal