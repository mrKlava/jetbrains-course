import React from 'react';

import './navbar.scss'

function Navbar(props) {
  return <div className='navbar'>
	  	<div className="navbar__logo">
			{/* <img src="" alt="" /> */}
			<a href="#header" className="navbar__logo-link">LOGO</a>
		</div>

	  	<ul className='navbar__list'>

			{/* <li className='navbar__list-item'><a href={props.link} className='navbar__list-item-link'>{props.linkTo}</a></li>
			<li className='navbar__list-item'><a href={props.link} className='navbar__list-item-link'>{props.linkTo}</a></li>
			<li className='navbar__list-item'><a href={props.link} className='navbar__list-item-link'>{props.linkTo}</a></li>
			<li className='navbar__list-item'><a href={props.link} className='navbar__list-item-link'>{props.linkTo}</a></li> */}

			<li className='navbar__list-item'><a href='#about' className='navbar__list-item-link'>About</a></li>
			<li className='navbar__list-item'><a href='#projects' className='navbar__list-item-link'>Projects</a></li>
			<li className='navbar__list-item'><a href='#contacts' className='navbar__list-item-link'>Contacts</a></li>
			<li className='navbar__list-item'><a href='#footer' className='navbar__list-item-link'>Footer</a></li>
	  	</ul>
  	</div>;
}

export default Navbar;
