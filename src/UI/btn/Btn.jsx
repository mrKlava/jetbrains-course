import React from 'react';

import './btn.scss';

function Btn(props) {
  return (
    <button 
      className={props.class} 
      id={props.id} 
      onClick={props.click}
    >
        {props.big} <br/>
        <span>{props.small}</span>
    </button>
  );
}

export default Btn;
