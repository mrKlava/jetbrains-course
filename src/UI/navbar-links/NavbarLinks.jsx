import React from 'react'

import { NavLink } from '..'

import './navbar-links.scss'

function NavbarLinks(props) {
	return (
		<ul className="navbar-links">
			{(props.links).map((link, key) => {
				return <NavLink link={link} key={key} />
			})}
		</ul>
	);
}

export default NavbarLinks;
