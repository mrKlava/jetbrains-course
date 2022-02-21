import React from 'react';

import { List } from '../../components'
import { Btn } from '../../UI';

import './project.scss';

function Project(props) {
	return (
		<div className='projects__cards-card'>

			<div className="card__front">
				<div className="card__front-content">
					<div className='card__top'>
						<div className="card__title">
							{props.data.title}
						</div>
						<div className="card__text">
							{props.data.text.short}
						</div>
					</div>
					<div className="card__list">
						<List data={props.data.list} />
					</div>
				</div>
			</div>

			{/* <div className="card__front">
				<div className="card__front-content">
					<div className="card__title">
						{props.data.title}
					</div>
					<div className="card__text">
						{props.data.text.short}
					</div>
					<div className="card__list">
						<List data={props.data.list} />
					</div>
				</div>
			</div> */}
			
			<div className="card__back">
				<div className="card__back-content">
					<div className="card__top">
						<div className="card__title">
							{props.data.title}
						</div>
						<div className="card__text">
							{props.data.text.full}
						</div>
					</div>
					<div className="card__btn">
						<Btn big={'Open project'}></Btn>
					</div>
				</div>
			</div>

		</div>
	);
}

export default Project;
