import React from 'react';

import { Navbar, List } from '../../components';
import { Btn } from '../../UI';

import {ReactComponent as PeopleLogo} from '../../assets/images/icons/people.svg'

import './header.scss'

function Header() {
    let icon = PeopleLogo;
    return (
        <div className='header'>
            <div className="container">
            <Navbar />
                <div className="header__content">
                    <div className="header__content-suptitle">
                        Have passed this training
                    </div>
                    <div className="header__content-title">
                        Track: Frontend Developer
                    </div>
                    <div className="header__content-info">
                        <ul className="header-list">
                            <li className="header-list_item"><PeopleLogo /><span>41k already learning</span></li>
                            <li className="header-list_item"><span>6 projects</span></li>
                            <li className="header-list_item"><span>80 hours</span></li>
                            <li className="header-list_item"><span>154 topics</span></li>
                        </ul>
                        {/* <List text={'test'} ><PeopleLogo /></List> */}
                    </div>
                    <div className="header__content-text">                        
                        Do you want to create your own websites or web applications? Choose this track to learn the most popular development tool suite among programmers around the world. We will cover the basics of JavaScript, HTML, and CSS to discover the power of modern Frontend development.
                    </div>
                </div>
                <Btn 
                        big={'Alredy done'} 
                        small={'click to see the result'} 
                        className='header__content-btn'
                />
            </div>
        </div>
    );
}

export default Header;
