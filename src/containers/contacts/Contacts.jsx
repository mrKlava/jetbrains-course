import React from 'react'

import { JetBrainsSvg } from '../../assets/images'

import './contacts.scss'


function Contacts(props) {
	return (
		<div className='contacts' id='contacts'>
			<div className="container">
				<div className="contacts-inner">
					<div className="contacts-inner__image">
						<JetBrainsSvg/>
					</div>
					<span className='mob-span'>Links to:</span>
					<div className="contacts-inner__link large">
						<a href={props.data.links.large.link} target='_blank'><span>{props.data.links.large.text}</span></a>
					</div>
					<div className="contacts-inner__link small">
						<a href={props.data.links.small.link} target='_blank'><span>{props.data.links.small.text}</span></a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contacts;
