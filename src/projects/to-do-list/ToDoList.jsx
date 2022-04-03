import React, { useState, useEffect } from 'react'

import data from '../assets/data/data'

import './to-do-list.scss'


function ToDo(props) {
	const [currentList, setCurrentList] = useState([])
	const [inputText, setInputText] = useState('')

	/* Local storage */
	useEffect(() => {
		if (!JSON.parse(localStorage.getItem("tasks")).length) {
			setCurrentList(
				[
					{ id: 1, text: 'Give Jazz', checked: true },
					{ id: 2, text: 'Learn React', checked: false }
				]
			)
			return
		}
		setCurrentList(JSON.parse(localStorage.getItem("tasks")))

	}, [])

	function updateLocalStorage() {
		localStorage.setItem('tasks', JSON.stringify(currentList))
	}

	useEffect(() => {
		updateLocalStorage()
	})

	/* Add task */
	function handleInputText(e) {
		const trg = e.target

		setInputText(trg.value)
	}

	function handleInputBtn() {
		const txt = inputText

		chkInput(txt)
	}

	function handleInputEnter(e) {
		if (e.key === 'Enter') {
			const txt = e.target.value

			chkInput(txt)
		}
	}

	function chkInput(text) {
		if (text.length === 0) return

		createTask(text)
		setInputText('')
	}

	function createTask(text) {
		const newTask = {
			id: new Date().getTime(),
			text: text,
			checked: false
		}

		setCurrentList([...currentList, newTask])
		updateLocalStorage()
	}

	/* Handle task */
	function handleChkBox(e) {
		const index = getIndex(e)

		currentList[index].checked = e.target.checked

		setCurrentList((listItem) => [...currentList])
		updateLocalStorage()
	}

	function handleDelete(e) {
		const index = getIndex(e)

		let begining = currentList.slice(0, index)
		let ending = currentList.slice(index + 1)

		setCurrentList([].concat(begining, ending))
		updateLocalStorage()
	}

	function getIndex(e) {
		let ans = 0
		const trg = e.target
		const id = trg.closest('li').dataset.id
		const listItems = Array.from(trg.closest('ul').children)

		listItems.forEach((item, index) => {
			if (item.dataset.id === id) ans = index
		})

		return ans
	}

	return (
		<div className='todo'>
			<div className="todo__title">{data.toDoList.title}</div>
			<div className="todo__content">
				<input className="todo__content-input" id='input' type="text" value={inputText} onChange={handleInputText} onKeyPress={handleInputEnter} />
				<button className="btn todo__content-btn" onClick={handleInputBtn}> add task</button>
				<ToDoList currentList={currentList} onChange={handleChkBox} onClick={handleDelete} />
			</div>
		</div>
	)
}

export default ToDo

function ToDoList(props) {

	// hoist chkbox
	function handleChkBox(e) {
		props.onChange(e)
	}

	// hoist btn Delete
	function handleDelete(e) {
		props.onClick(e)
	}

	return (
		<ul className="todo__content-list">
			{
				(props.currentList).map((item) => {
					return <ToDoListItem text={item.text} checked={item.checked} key={item.id} dataId={item.id} onChange={handleChkBox} onClick={handleDelete} />
				})
			}
		</ul>
	)
}

function ToDoListItem(props) {

	// hoist chkbox
	function handleChkBox(e) {
		props.onChange(e)
	}

	// hoist btn Delete
	function handleDelete(e) {
		props.onClick(e)
	}

	return (
		<li className={(props.checked) ? 'list-item crossed' : 'list-item'} data-id={props.dataId}>
			<div className="list-item__content">
				<input className='list-item__content-box' type="checkbox" checked={props.checked} number={props.id} onChange={handleChkBox} />
				<span className='list-item__content-text'>{props.text}</span>
			</div>

			<button className='list-item__btn' onClick={handleDelete}>X</button>
		</li>
	)
}