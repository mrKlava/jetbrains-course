import React, {useState} from 'react';

import './navbar.scss';

import { NavbarLinks, Hamburger } from '../../UI';

function Navbar(props) {

	const eventHandler = hamState => setToggleMobMenu(hamState)
	
	const [toggleMobMenu, setToggleMobMenu] = useState(false)

	return (
		<div className="navbar">
			<div className="container">
				<div className="navbar-inner">
								
					<div className="navbar-inner__logo">{/* logo */}
						<a href={props.data.logo.link}>{props.data.logo.logo}</a>
					</div>

					<div className="navbar-inner__nav">{/* DESKTOP */}	
						<NavbarLinks links={props.data.links} />{/* links */}
					</div>

					<div className={toggleMobMenu ? "navbar-inner__nav-mob active" : "navbar-inner__nav-mob"  } >{/* TABLETS / MOBILE */}	
						<NavbarLinks links={props.data.links} />{/* links */}
					</div>

					<Hamburger onChange={eventHandler} />

				</div>
			</div>
		</div>
	);
}

export default Navbar;
