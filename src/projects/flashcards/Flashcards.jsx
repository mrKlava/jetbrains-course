import React, {useState} from 'react'

import './flashcards.scss'

import data from '../assets/data/data'
import { Btn } from '../../UI'

function Flashcards() {

  const [index, setIndex] = useState(0)

  function getRundomIndex(max) {
    return Math.floor(Math.random() * (max + 1) )
  }

  function refreshCards() {
    let index = getRundomIndex(data.flascards.cards.length - 1)
    
    setIndex(index)
  }

  return (
    <div className='flashcards'>

      <div className="flashcards__title">{data.flascards.title}</div>
      <div className="flashcards__content">

        {
          data.flascards.cards[index].map( (card, index) => {
            return (
              <Card key={index}>
                <FrontCard>
                  {card.front}
                </FrontCard>
                <BackCard>
                  {card.back}
                </BackCard>
              </Card>
            )
          })
        }

      </div>
      <Btn 
        className={'btn btn-flaschcards'}
        big={'Refresh'}
        onClick={refreshCards}
      />
    </div>
  )
}

export default Flashcards

function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  )
}

function FrontCard(props) {
  return (
    <div className="front">
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

function BackCard(props) {
  return (
    <div className="back">
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}