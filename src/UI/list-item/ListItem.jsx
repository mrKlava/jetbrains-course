import React from 'react'

import './listItem.scss'

function ListItem(props) {
  return (
    <li className='info-list__item'>
      {props.children}
    </li>
  )
}

export default ListItem;