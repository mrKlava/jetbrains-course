import React from 'react';

import './btn.scss';

function Btn(props) {
  return (
    <button 
      className={props.className} 
      id={props.id} 
      onClick={props.onClick}
    >
        {props.big} <br/>
        <span>{props.small}</span>
    </button>
  );
}

export default Btn;
