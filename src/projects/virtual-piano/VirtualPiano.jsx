import React, { useEffect } from 'react'

import './virtual-piano.scss'

import data from '../assets/data/data'
import keyTones from '../assets/audio/index'

function VirtualPiano() {

  const suportedKeys = [['A', 'S', 'D', 'F', 'G', 'H', 'J'], ['W', 'E', 'T', 'Y', 'U']]

  const keys = [] 
  
  suportedKeys.map((item) => {
    return keys.push(...item)
  })

  function chkKey(letter) {

    for (let i = 0; i < keys.length; i++) {
      if ( keys[i] === letter ) {
        console.log(`The '${keys[i]}' key is pressed.`)

        const keyTone = new Audio(keyTones[keys[i]]);

        toggleClass(letter)

        keyTone.play()
        return
      }
    }

    console.log('Pressed not supported key.')
    return
  }

  function toggleClass(letter) {
    let target = document.getElementById(letter.toLowerCase())
    target.classList.add('pressed')
    setTimeout( () => target.classList.remove('pressed'), 200 )
  }

  function handleClick(e) {
    chkKey( e.target.innerText )    // passsing letter
  }

  useEffect(() => {
    document.addEventListener('keypress', function (e) {

      chkKey( e.key.toUpperCase() )  // passsing letter
    })
  })


  return (
    <div className='virtaul-piano'>

      <div className="virtaul-piano__title">{data.virtualPiano.title}</div>
      <div className="virtaul-piano__content">

        <div className="keys">
          {
            suportedKeys[1].map((item, index) => {
              return <BlackKey 
                        id={item.toLowerCase()} 
                        letter={item} 
                        onClick={handleClick} 
                        key={index} 
                    />
            })
          }
          {
            suportedKeys[0].map((item, index) => {
              return <WhiteKey 
                          id={item.toLowerCase()} 
                          letter={item} 
                          onClick={handleClick} 
                          key={index} 
                      />
            })
          }
        </div>

      </div>

    </div>
  )
}

export default VirtualPiano


function WhiteKey(props) {
  return (
    <kbd onClick={props.onClick} id={props.id} className="key key-white">{props.letter}</kbd>
  )
}

function BlackKey(props) {
  return (
    <kbd onClick={props.onClick} id={props.id} className="key key-black">{props.letter}</kbd>
  )
}