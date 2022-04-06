# "Portfolio project" for JetBrain Academy "Frontend developer" track
Link to - [JetBrains Academy](https://www.jetbrains.com/academy/)
Link to - [Track: Frontend Developer](https://hyperskill.org/tracks/5)
Link to - [My profile](https://hyperskill.org/profile/192486091)

This is project "Portfolio" which is including five other projects from this course. During this course all projects were made on pure HTML, CSS and JS, but here they are remastered on React.js.
This course was finished on February 2022 and React version was made in March 2022.
## Projects
### Case Converter
This project is easy app for case converting:
to UPPER CASE
to lower case
to Proper Case
to Sentence case
as well it allows you to save .txt file.
### Flash-cards
It is memory game with flip cards. For example we used french verb declension. You need just hover (click for mob.ver.) on card to reveal correct answer. As well you have button to set other random set of cards.
### Virtual Piano
Basically name stands for itself. A virtual piano which you can play by clicking key on screen or pressing correct key on keyboard.
### To-Do List
Simple To-Do list which is stored on Local Storage, so if you close browser or refresh page all todos will be saved on restored on next session. You have functionality to crossout made tasks or just deleting them from list.
### Open Space
This is mini-game, where you need to send rocket to open space. To do that you need to unlock all functionality of control panel. Starting from password finishing with Launch button - more you click, rocket goes faster. 
Remember - TrustNo1
### Portfolio
This is final project which should summarize what you have learned during this course and mission was to make portfolio page using HTML, CSS and JS. But it was remastered on React.js for practice purpose. This page is looking like (with some adjustments) as original landing page of this course - [Track: Frontend Developer](https://hyperskill.org/tracks/5).
# About React app
## Dependencies installed
```
 npm install sass
```
## Structure
### File structure
All JSX file are going on pares with SCSS filles in same folder.
```
src
	assets
		data				// data.json for page text content
		fonts				// fonts used on 
		images			    	// all svg images for page
	components		        	// medium reusable components 
		list
		modal
		navbar
		project
	containers			   	// big bilding components
		about
		contacts
		footer
		header
		projects
	projects			    	// all projects
		assets			    	// assets for projects
			audio
			data
			images
		case-converter
		flashcards
		open-space
		portfolio
		to-do-list
		virtual-piano
	UI					// small reusable components
		btn
		hamburger
		list-item
		nav-link
		navbar-links
	style					// scss variables
```
## Notes
I intentionally was doing props drilling and not using useContext to practice with props handling and data flow from top to bottom.
This project was created to train myself to use basic React features as props, useState, useRef (understand lifecycles), lifting state, handling events, conditional rendering and rest main concepts of React. To be able to change code from pure JS to JSX.
