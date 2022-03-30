import React from 'react'

import './open-space.scss'
import data from '../assets/data/data'


function OpenSpace() {
  return (
    <div className='open-space'>

      <div className="open-space__title">{data.openSpace.title}</div>
      <div className="open-space__content">
        <div className="planet-area">
          <img className='mars' src={data.openSpace.mars} />
          <img className='rocket' src={data.openSpace.rocket} />
        </div>
        <ControlPanel />
      </div>

    </div>
  )
}

export default OpenSpace

function ControlPanel(props) {
  return (
    <div className="control-pannel">
      <Password />
      <CheckBoxes />
      <Levelers />
      <LaunchBtn />
    </div>
  )
}

function Password(props) {
  return (
    <>
      <input className="password-field" id="password" type="password" placeholder="Enter password to unlock" />
      <input className="password-btn" id="passwordBtn" type="button" value="ok"></input>
    </>
  )
}

function CheckBoxes(props) {
  return (
    <>
      <input className="check-buttons-item" type="checkbox" />
      <input className="check-buttons-item" type="checkbox" />
      <input className="check-buttons-item" type="checkbox" />
      <input className="check-buttons-item" type="checkbox" />
      <input className="check-buttons-item" type="checkbox" />
      <input className="check-buttons-item" type="checkbox" />
    </>
  )
}

function Levelers(props) {
  return (
    <>
      <input className="levers-item" type="range" orient="vertical" />
      <input className="levers-item" type="range" orient="vertical" />
      <input className="levers-item" type="range" orient="vertical" />
      <input className="levers-item" type="range" orient="vertical" />
      <input className="levers-item" type="range" orient="vertical" />
    </>
  )
}

function LaunchBtn(props) {
  return (
    <input className="launch" id="launchBtn" type="button" value="Launch"></input>
  )
}