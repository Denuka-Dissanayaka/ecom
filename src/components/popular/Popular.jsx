import React from 'react';
import { Container } from './Style';

import Card from './Card';
import items from './items';

const Popular = () => {
  return (
    <Container>
        <h1 className="title">Popular Collection</h1>
        <div className="collection">
            
            {
                items.map(item => {
                    
                    return <Card name={item.name} img={item.image} key={item.id}/>
                })
            }
        </div>
    </Container>
  )
}

export default Popular;