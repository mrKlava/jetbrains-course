// import React, {useState} from 'react'

// import { List } from '../../components'

// import { CaseConverter, Flashcards, OpenSpace, ToDoList, VirtualPiano, } from '../../projects' // delete if wont work

// import { Btn } from '../../UI'
// import Modal from '../modal/Modal'

// import './project.scss'

// function Project(props) {

// 	const projectsArr = [
// 		{id: 1, name: CaseConverter},
// 		{id: 2, name: Flashcards},
// 		{id: 3, name: VirtualPiano},
// 		{id: 4, name: ToDoList},
// 		{id: 5, name: OpenSpace},
// 		{id: 6, name: () => null}
// 	]

// 	const [isActive, setIsActive] = useState(false)
// 	const [index, setIndex] = useState(5)

// 	console.log(index)

// 	function handleOpen(e) {
// 		props.liftState(e)			// if it will work from here, we wont need lift state up
// 		setIsActive(true)
// 		setIndex(4)
// 	}

// 	function handleClose(trg) {
// 		setIsActive(trg)
// 		setIndex(5)
// 	}

// 	return (
// 		<div className='projects__cards-card'>

// 			<div className="card__front">
// 				<div className="card__front-content">
// 					<div className='card__top'>
// 						<div className="card__title">
// 							{props.data.title}
// 						</div>
// 						<div className="card__text">
// 							{props.data.text.short}
// 							<span>Click to flip...</span>

// 						</div>
// 					</div>

// 					<div className="card__list">
// 						<List data={props.data.list} />
// 					</div>
// 				</div>
// 			</div>

// 			<div className="card__back">
// 				<div className="card__back-content">
// 					<div className="card__top">
// 						<div className="card__title">
// 							{props.data.title}
// 						</div>
// 						<div className="card__text">
// 							{props.data.text.full}
// 						</div>
// 					</div>
// 					<div className="card__btn">
// 						<Btn className='btn' big={'Open project'} onClick={handleOpen}></Btn>
// 					</div>
// 				</div>
// 			</div>

// 			<Modal active={isActive} liftClose={handleClose}>
// 				{/* {props.children} */}
// 				{projectsArr[index].name()}
// 			</Modal>

// 		</div>
// 	);
// }

// export default Project;



import React, {useState} from 'react'

import { List } from '../../components'

import { CaseConverter, Flashcards, OpenSpace, ToDoList, VirtualPiano, } from '../../projects' // delete if wont work

import { Btn } from '../../UI'
import Modal from '../modal/Modal'

import './project.scss'

function Project(props) {

	const projectsArr = [
		{id: 1, name: CaseConverter},
		{id: 2, name: Flashcards},
		{id: 3, name: VirtualPiano},
		{id: 4, name: ToDoList},
		{id: 5, name: OpenSpace},
		{id: 6, name: () => null}
	]

	const [isActive, setIsActive] = useState(false)
	const [index, setIndex] = useState(5)

	console.log(index)

	function handleOpen(e) {
		props.liftState(e)			// if it will work from here, we wont need lift state up
		setIsActive(true)
		setIndex(4)
	}

	function handleClose(trg) {
		setIsActive(trg)
		setIndex(5)
	}

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
						<Btn className='btn' big={'Open project'} onClick={handleOpen}></Btn>
					</div>
				</div>
			</div>

			<Modal active={isActive} liftClose={handleClose}>
				{/* {props.children} */}
				{projectsArr[index].name()}
			</Modal>

		</div>
	);
}

export default Project;
