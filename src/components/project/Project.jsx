import React from 'react';

import {List} from '../../components'
import { Btn } from '../../UI';

import './project.scss';

function Project(props) {
  return (
    <div className='projects__cards-card'>
		<div className="card-item">
			<div className='card-item__title'>{props.data.title}</div>
			<div className='card-item__text short'>{props.data.text.short}</div>
			<div className="card-item__full">
				<div className='card-item__text full'>{props.data.text.full}</div>
				<Btn big={'Open project'}></Btn>
			</div>
		</div>
		<div className="card-item">
			<List data={props.data.list} />
		</div>
    </div>
  );
}

export default Project;
