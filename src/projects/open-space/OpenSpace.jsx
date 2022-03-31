import React, {useState, useEffect} from 'react'

import './open-space.scss'
import data from '../assets/data/data'


function OpenSpace() {
  const [isLaunched, setIsLaunched] = useState(false)
  const [position, setPosition] = useState({left: 220, bottom: 180})

  function handleLaunch(e) {

    const newPosition = setInterval( () => {
      setPosition( (prev) => ({left: prev.left + 1, bottom: prev.bottom + 1}) )
    }, 30)

    setIsLaunched(newPosition)
  }
  
  useEffect( () => {
    return () => setIsLaunched(0)
  },[] )

  // function fly() {
  //    setPosition( (prev) => ({left: prev.left + 0.2, bottom: prev.bottom + 0.2}) )
  // }

  // useEffect( () => {
  //   const flyId = setInterval( () => setPosition( (prev) => ({left: prev.left + 5, bottom: prev.bottom + 5}) ), 30 )
    
  //   return () => clearInterval(flyId)
  // }, [])

  return (
    <div className='open-space'>

      <div className="open-space__title">{data.openSpace.title}</div>
      <div className="open-space__content">
        <div className="planet-area">
          <img className='mars' src={data.openSpace.mars} />
          <Rocket position={position} />
        </div>
        <ControlPanel liftLaunch={handleLaunch} />
      </div>

    </div>
  )
}

export default OpenSpace

function Rocket(props) {
  const left = props.position.left + 'px'
  const bottom = props.position.bottom + 'px'

  return <img className='rocket' src={data.openSpace.rocket} style={{left:left, bottom:bottom}}/>
}

function ControlPanel(props) {
  /* Password */
  const [isPas, setIsPas] = useState(true)                

  function handlePasword(target) {
    if (target === 'TrustNo1') manageState(setIsPas, setIsChecked)    // <= super secret password
  }

  /* CheckBoxes */
  const checkboxesArr = [
    {id:1, checked: false}, 
    {id:2, checked: false}, 
    {id:3, checked: false}, 
    {id:4, checked: false}, 
    {id:5, checked: false}, 
    {id:6, checked: false}
  ]
  const [checkboxes, setCheckboxes] = useState(checkboxesArr)
  const [isChecked, setIsChecked] = useState(false) 

  function handleChecks(e) {
    const index = e.target.id.replace('chk-','') - 1
    const newArr = checkboxes.concat()

    newArr[index].checked = !checkboxes[index].checked

    setCheckboxes(newArr)
  }
  
  function checkChecboxes() {
    for ( let i = 0; i < checkboxes.length; i++ ) {
      if ( !checkboxes[i].checked ) return
    }

    manageState(setIsChecked, setIsRanges)
  }

  useEffect( () => checkChecboxes(), [checkboxes])
  
  /* Ranges */
  const rangesArr = [
    {id: 1, value: 0},
    {id: 2, value: 0},
    {id: 3, value: 0},
    {id: 4, value: 0},
    {id: 5, value: 0},
  ]
  const [ranges, setRanges] = useState(rangesArr)
  const [isRanges, setIsRanges] = useState(false)

  function handleRanges(e) {
    const index = e.target.id.replace('ran-','') - 1
    const newArr = ranges.concat()

    newArr[index].value = e.target.value

    setRanges(newArr)
  }

  function checkRanges() {
    for ( let i = 0; i < ranges.length; i++ ) {
      if ( ranges[i].value !== '100') return
    }

    manageState(setIsRanges, setIsLaunch)
  }

  useEffect( () => checkRanges(), [ranges] )

  /* Launch */
  const [isLaunch, setIsLaunch] = useState(false)

  function handleClick(e) {
    props.liftLaunch(e)
  }

  /* State management */
  function manageState(stateFalse, stateTrue) {
    stateFalse(false)
    stateTrue(true)
  }

  

  return (
    <div className="control-pannel">
      <div className='control-pannel__inner'>
        <Password liftPasword={handlePasword} active={isPas} />
        <CheckBoxes liftChecks={handleChecks} items={checkboxes} active={isChecked} />
        <Ranges liftRanges={handleRanges} items={ranges} active={isRanges} />
        <LaunchBtn active={isLaunch} onClick={handleClick} />
      </div>
    </div>
  )
}

function Password(props) {
  const [pas, setPas] = useState('')
  const active = props.active

  function handleChange(e) {
    setPas(e.target.value)
  }

  function handleSubmit(e) {
    props.liftPasword(pas)
    e.preventDefault()
    setPas('')
  }

  return (
    <form className='password' onSubmit={handleSubmit}>
      <input 
        className="password-field" 
        type="password" 
        value={pas}  
        onChange={handleChange}
        placeholder="Enter password to unlock"
        disabled={!active} />
      <input 
        className="password-btn" 
        type="submit" 
        value="ok"
        disabled={!active} />
    </form>
  )
}

function CheckBoxes(props) {

  const active = props.active
  const checkboxes = props.items

  function handleCheck(e) {
    props.liftChecks(e)
  }

  const items = checkboxes.map( (item) => {
    return <input 
      className="check-buttons-item" 
      id={`chk-${item.id}`} 
      type="checkbox" 
      key={item.id} 
      disabled={!active} 
      checked={item.checked} 
      onChange={handleCheck} />
  })

  return (
    <div className='checkboxes'>{items}</div>
  )
}

function Ranges(props) {
  const active = props.active
  const ranges = props.items

  function handleRanges(e) {
    props.liftRanges(e)
  }

  const items = ranges.map( (item) => {
    return <input 
      className="levers-item" 
      key={item.id}
      id={`ran-${item.id}`}
      type="range" 
      orien="vertical"
      value={item.value} 
      disabled={!active}
      onChange={handleRanges} />
  } )

  return <div className='ranges'>{items}</div>
}

function LaunchBtn(props) {
  const active = props.active

  function handleClick(e) {
    props.onClick(e)
  }

  return (
    <input 
      className="launch" 
      type="button" 
      value="Launch"
      onClick={handleClick}
      disabled={!active} />
  )
}