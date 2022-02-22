import React from 'react';

import { List } from '../../components';
import { Btn } from '../../UI';

import {ReactComponent as PeopleLogo} from '../../assets/images/icons/people.svg'


import './header.scss'

function Header(props) {

    return (
        <div className='header' id='header'>
            <div className="container">
                <div className="header__content">
                    <div className="header__content-suptitle">{props.data.suptitle}</div>
                    <div className="header__content-title">{props.data.title} </div>
                    <div className="header__content-info">
                        <List data={props.data.line} />       
                    </div>
                    <div className="header__content-text">{props.data.text}</div>
                </div>
                <Btn 
                    big={props.data.btn.big} 
                    small={props.data.btn.small} 
                />
            </div>
        </div>
    );
}

export default Header;
