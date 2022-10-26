import React from 'react';
import bannerImg from '../../asset/images/banner.png'
import Btn from '../button/Btn';
 
import { Container } from './Style';

const Showcase = () => {
  return (
    <Container>
        <div className="text-container">
            <div className="text">
                <div>
                    <p className='primary-text'>Just Droped</p>
                    <p className='main-text'>Feel<br/>Authentic<br/>Peace</p>
                    <Btn name='Shop Now'/>
                </div>
            </div>
        </div>
        <div className="image-container">
            <div className="image">
                <img src={bannerImg} alt="" srcset="" />
            </div>
        </div>
    </Container>
  )
}

export default Showcase
