import React from 'react'
import { CardContainer } from './Style'


const Card = ({name , img}) => {
  return (
    <CardContainer>
        <div className="image">
            <img src={img} alt="product"  />
        </div>
        <div className="text">
            <p className="item-name">{name}</p>
            <p className="item-price">$120.00</p>
        </div>
    </CardContainer>
  )
}

export default Card
