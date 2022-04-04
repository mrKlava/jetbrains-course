import React from 'react'

import './nav-link.scss'

function NavLink(props) {

	return (
		<li className='navbar-links__link'>
			<a href={props.link.link}>
				{props.link.text}
			</a>
		</li>
	);
}

export default NavLink;
