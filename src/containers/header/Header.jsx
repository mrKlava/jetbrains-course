import React from 'react';

import { Navbar } from '../../components';
import { Btn } from '../../UI';

import {ReactComponent as PeopleLogo} from '../../assets/images/icons/people.svg'


import './header.scss'

function Header(props) {

    return (
        <div className='header' id='header'>
            <div className="container">
            <Navbar />
                <div className="header__content">
                    <div className="header__content-suptitle">{props.data.suptitle}</div>
                    <div className="header__content-title">{props.data.title} </div>
                    <div className="header__content-info">

                        <ul className="header-list">
                            <li className="header-list_item"><PeopleLogo /><span>41k already learning</span></li>
                            <li className="header-list_item"><span>6 projects</span></li>
                            <li className="header-list_item"><span>80 hours</span></li>
                            <li className="header-list_item"><span>154 topics</span></li>
                        </ul>
                        {/* <List text={'test'} ><PeopleLogo /></List> */}
                        
                    </div>
                    <div className="header__content-text">{props.data.text}</div>
                </div>
                <Btn 
                        className='header__content-btn'
                        big={props.data.btn.big} 
                        small={props.data.btn.small} 
                />
            </div>
        </div>
    );
}

export default Header;
