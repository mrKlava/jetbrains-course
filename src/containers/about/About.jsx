import React from 'react';

import { List } from '../../components'
import { ChallenchingSvg, EasySvg, EducationSvg, HardSvg, MediumSvg } from '../../assets/images'

import './about.scss';

function About(props) {
	const arr = [<EasySvg/>, <MediumSvg/>, <HardSvg/>, <ChallenchingSvg/>]

	return <div className='about' id='about'>
		<div className="container">
			<div className="about__title">{props.data.title}</div>
			<div className="about__subtitle">{props.data.subtitle}</div>
			<div className="about__content">
				<div className="about__content-item card">
					<div className="about__content-item__text">{props.data.card.text}</div>
					<div className="about__content-item__bold">{props.data.card.bold}</div>
					<div className="about__content-item__list">
						<List data={props.data.card.list} svgArray={arr}/>
					</div>
				</div>
				<div className="about__content-item education">
					<div className="about__content-item__image">
						<EducationSvg />
					</div>
					<div className="about__content-item__text">{props.data.text}</div>
				</div>
			</div>
		</div>
	</div>;
}

export default About;
