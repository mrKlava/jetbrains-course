import React from 'react';

import {ListItem} from '../../UI';

import './list.scss';

function List(props) {
  	return (
      	<ul className='info-list'>
			  {(props.data).map(function(item, index) {
			  	return <ListItem data={item} key={index} />
			  })}
    	</ul>
  	);
}

export default List;
