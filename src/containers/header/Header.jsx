import React from 'react';

import { List } from '../../components';
import { Btn } from '../../UI';
import { PeopleSvg, ProjectSvg, ClockSvg, BookSvg } from '../../assets/images';

import './header.scss'

function Header(props) {
	const arr = [<PeopleSvg/>, <ProjectSvg/>, <ClockSvg/>, <BookSvg/>]

	return (
		<div className='header' id='header'>

			<div className="container">
				<div className="header__content">
					<div className="header__content-suptitle">{props.data.suptitle}</div>
					<div className="header__content-title">{props.data.title} </div>
					<div className="header__content-info">
						<List data={props.data.line} svgArray={arr} />
					</div>
					<div className="header__content-text">{props.data.text}</div>
				</div>
				<a href="#projects">
					<Btn
						className='btn'
						big={props.data.btn.big}
						small={props.data.btn.small}
					/>
				</a>
			</div>
		</div>
	);
}

export default Header;
