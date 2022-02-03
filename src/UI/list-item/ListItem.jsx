import React from 'react';

import './listItem.scss'

function ListItem(props) {
  return (
  <li className='info-list__item'>
      <span>
        {props.data}
      </span>
  </li>
  );
}

export default ListItem;
