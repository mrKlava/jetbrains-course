import React from 'react';

import { Project } from '../../components';

import './projects.scss';

function Projects(props) {
  return (
    <div className='projects' id='projects'>
    	<div className="container">
        	<div className="projects__title">{props.data.title}</div>
        	<div className="projects__subtitle">{props.data.subtitle}</div>
        	<div className="projects__suptext">{props.data.suptext}</div>
        	<div className="projects__text">{props.data.text}</div>
			
        	<div className="projects__cards">

				{/* {(props.data.cards).map(function(item, index) {
					return <Project data={item} key={index} />
				})} */}

				<Project data={props.data.cards[0]}/>

			</div>
    	</div>
    </div>
  );
}

export default Projects;
