import React from 'react'
import Card from '../card/card.component'
import './card-list.styles.css'

export default function CardList(props) {
    console.log(props)
    return (
        <div className="card-list">
            {props.listMonsters.map(monster =>  <Card key={monster.id} monster={monster} />)}
        </div>
    )
}
