import React, {useState} from 'react';

import './navbar.scss';

import { NavbarLinks, Hamburger } from '../../UI';

function Navbar(props) {
	const [toggleMobMenu, setToggleMobMenu] = useState(false)
	
	const handleHam = hamState => setToggleMobMenu(hamState)

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

					<div className={toggleMobMenu ? "navbar-inner__nav-mob active" : "navbar-inner__nav-mob"  } onClick={ () => setToggleMobMenu(false)} >{/* TABLETS / MOBILE */}	
						<NavbarLinks links={props.data.links} />{/* links */}
					</div>

					<Hamburger 
						updateHam={handleHam} 
						isBurger={toggleMobMenu}
						/>

				</div>
			</div>
		</div>
	);
}

export default Navbar;
