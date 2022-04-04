import React from 'react'

import './hamburger.scss'

function Hamburger(props) {

	const isBurger = props.isBurger

	function handleClick() {
		props.updateHam(!isBurger)
	}

	return (
		<div
			className={!isBurger ? 'hamburger' : 'hamburger active'}
			onClick={handleClick}
		>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export default Hamburger;
