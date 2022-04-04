import React, {useState} from 'react'

import { Project, Modal } from '../../components'
import { CaseConverter, Flashcards, OpenSpace, Portfolio, ToDoList, VirtualPiano } from '../../projects'
import { BookSvg, ClockSvg, StarSvg, ChallenchingSvg, EasySvg, HardSvg, MediumSvg } from '../../assets/images'

import './projects.scss'

function Projects(props) {
	const [isActive, setIsActive] = useState(false)
	const [index, setIndex] = useState(6)
	const cards = props.data.cards
	const projectsArr = [<CaseConverter/>, <Flashcards/>, <VirtualPiano/>, <ToDoList/>, <OpenSpace/>, <Portfolio/>, null]
	const difficulty = [<EasySvg/>, <MediumSvg/>, <HardSvg/>, <ChallenchingSvg/>]

	/* Handle SVG array */
	function creatSvgArray(item) {
		const svgArr = [<StarSvg/>, difficulty[item.difficulty], <ClockSvg/>, <BookSvg/>]

		return svgArr
	}

	/* Open window */
	function openModal(e) {
		const index = + e.target.id.replace('pro-', '')

		setIndex(index)
		setIsActive(true)
	}

	/* Close window */
	function handleClose(e) {

		setIndex(6)
		setIsActive(false)
	}

	return (
		<div className='projects' id='projects'>
			<div className="container">
				<div className="projects__title">{props.data.title}</div>
				<div className="projects__subtitle">{props.data.subtitle}</div>
				<div className="projects__suptext">{props.data.suptext}</div>
				<div className="projects__text">{props.data.text}</div>

				<div className="projects__cards">

					{cards.map(function (item, index) {
						return <Project
							data={item}
							key={index}
							id={`pro-${index}`}
							liftState={openModal}
							svgArray={creatSvgArray(item)} />
					})}

				</div>
			</div>
			<Modal active={isActive} liftClose={handleClose}>
				{projectsArr[index]}
			</Modal>
		</div>
	)
}

export default Projects;
