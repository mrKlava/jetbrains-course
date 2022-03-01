import React, { useEffect } from 'react'

import './virtual-piano.scss'

import data from '../assets/data/data'
import keyTones from '../assets/audio/index'

function VirtualPiano() {

  console.log(keyTones)

  const suportedKeys = [['A', 'S', 'D', 'F', 'G', 'H', 'J'], ['W', 'E', 'T', 'Y', 'U']]

  function chkKey(arr, e) {

    let keys = []

    arr.map((item) => {
      return keys.push(...item)
    })

    for (let i = 0; i < keys.length; i++) {
      if (`Key${keys[i]}` === e.code || keys[i] === e) {

        let keyTone = new Audio(keyTones[keys[i]]);

        keyTone.play();
        return console.log(`The '${keys[i]}' key is pressed.`);
      }
    }
    return console.log('Pressed not supported key.');
  }

  function toggleClass() {

  }

  function handleClick(e) {
    chkKey(suportedKeys, e.target.innerText)
  }

  useEffect(() => {
    document.addEventListener('keypress', function (e) {
      chkKey(suportedKeys, e)
    })
  })


  return (
    <div className='virtaul-piano'>

      <div className="virtaul-piano__title">{data.virtualPiano.title}</div>
      <div className="virtaul-piano__content">

        <div className="keys">
          {
            suportedKeys[1].map((item, index) => {
              return <BlackKey letter={item} press={handleClick} key={index} />
            })
          }
          {
            suportedKeys[0].map((item, index) => {
              return <WhiteKey letter={item} press={handleClick} key={index} />
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
    <kbd onClick={props.press} className="key key-white">{props.letter}</kbd>
  )
}

function BlackKey(props) {
  return (
    <kbd onClick={props.press} className="key key-black">{props.letter}</kbd>
  )
}