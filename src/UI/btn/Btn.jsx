import React from 'react';

import './btn.scss';

function Btn(props) {
  return (
    <button className='btn'>
        {props.big} <br/>
        <span>{props.small}</span>
    </button>
  );
}

export default Btn;
