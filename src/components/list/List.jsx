import React from 'react';

import {ListItem} from '../../UI';

import './list.scss';

function List(props) {
  	return (
      	<ul>
			  <ListItem text={props.text}/>
    	</ul>
  	);
}

export default List;
