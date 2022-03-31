import React from 'react'

import { List } from '../../components'
import { CaseConverter, Flashcards, OpenSpace, ToDoList, VirtualPiano, } from '../../projects'
import { Btn } from '../../UI'
import Modal from '../modal/Modal'

import './project.scss'

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
							<span>Click to flip...</span>

						</div>
					</div>

					<div className="card__list">
						<List data={props.data.list} />
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
						<Btn big={'Open project'}></Btn>
					</div>
				</div>
			</div>

			<Modal>
				{/* <CaseConverter /> */}
				{/* <Flashcards /> */}
				{/* <VirtualPiano /> */}
				{/* <ToDoList /> */}
				<OpenSpace />
			</Modal>

		</div>
	);
}

export default Project;
