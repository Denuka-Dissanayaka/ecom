import React from 'react';

// ----------- Import Image---------------
import person from '../../asset/images/person.png'

// ------------ Import Icon --------------
import {IoMdArrowDropleft} from 'react-icons/io';
import {IoMdArrowDropright} from 'react-icons/io';

// ----------- Import styled components ----------------
import { Container } from './Style';

const Story = () => {
  return (
    <Container>
        <div className="story">
            <div className="image">
                <img src={person} alt="" srcset="" />
            </div>
            <div className="story-container">
                <p className='story-title'><span className='span-1'>True Story</span><span className='span-2'><IoMdArrowDropleft/> 01 <IoMdArrowDropright/></span></p>
                <p className='content'>" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed veritatis suscipit ipsam aliquam distinctio iusto commodi molestias exercitationem optio, consequatur non accusamus, nisi tempora animi rerum laudantium fugit incidunt ipsum. "</p>
                <p className='name'> <span className="span-3">Julia Crawford</span> <span className='span-4'>Designer At Orizon Studio</span></p>
            </div>
        </div>
    </Container>
  )
}

export default Story
