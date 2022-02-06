import React from 'react';

import './navbar-links.scss';

import { NavLink } from '..';

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
