import React, {useState} from 'react';

import { Project } from '../../components';
// import { CaseConverter, Flashcards, OpenSpace, ToDoList, VirtualPiano, } from '../../projects'

import './projects.scss';

function Projects(props) {
	const cards = props.data.cards
// 	const projectsArr = [
// 		{id: 1, name: CaseConverter},
// 		{id: 2, name: Flashcards},
// 		{id: 3, name: VirtualPiano},
// 		{id: 4, name: ToDoList},
// 		{id: 5, name: OpenSpace},
// 		{id: 6, name: () => null}
// 	]

// 	const [project, setProject] = useState(null)     // We cant pass Component trough here

	function openModal(e) {
		console.dir(e.target)
	}

	return (
		<div className='projects' id='projects'>
			<div className="container">
				<div className="projects__title">{props.data.title}</div>
				<div className="projects__subtitle">{props.data.subtitle}</div>
				<div className="projects__suptext">{props.data.suptext}</div>
				<div className="projects__text">{props.data.text}</div>

				<div className="projects__cards">

					{/* {cards.map(function (item, index) {
						return <Project
							data={item}
							key={index}
							liftState={openModal}> {projectsArr[index].name()} </Project>
					})} */}

					{cards.map(function (item, index) {
						return <Project
							data={item}
							key={index}
							liftState={openModal} />
					})}

				</div>
			</div>
		</div>
	);
}

export default Projects;
