import React from 'react';

import { ListItem } from '../../UI';

import './list.scss';

function List(props) {
	const arr = props.svgArray

	return (
		<ul className='info-list'>
			{(props.data).map(function (item, index) {
				return (
					<ListItem key={index}>
						{arr ? arr[index] : null}
						<span>{item}</span>
					</ListItem>
				)
			})}
		</ul>
	);
}

export default List;