import React from 'react'

import { List } from '../../components'
import { Btn } from '../../UI'

import './project.scss'

function Project(props) {
	const arr = props.svgArray

	function handleOpen(e) {
		props.liftState(e)
	}

	return (
		<div className='projects__cards-card'>

			<div className="card__front">
				<div className="card__front-content">
					<div className='card__top'>
						<div className="card__title">
							{arr[1]}
							{props.data.title}
						</div>
						<div className="card__text">
							{props.data.text.short}
							<span>Click to flip...</span>
						</div>
					</div>

					<div className="card__list">
						<List data={props.data.list} svgArray={arr} />
					</div>
				</div>
			</div>

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
						<Btn id={props.id} className='btn' big={'Open project'} onClick={handleOpen}></Btn>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Project;
