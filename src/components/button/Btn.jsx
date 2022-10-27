import React from 'react'
import styled from 'styled-components';
import {FiArrowUpRight} from 'react-icons/fi'

const BtnContainer = styled.button`
    background-color: black;
    color: white;
    padding: 1.7rem 3.5rem;
    font-size: 1.5rem;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: black;
      border-color: black;
      background: transparent;
    }

    span {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
`;

const Btn = ({name}) => {
  return (
    <BtnContainer>
        <span>{name} <FiArrowUpRight/></span>
    </BtnContainer>
  )
}

export default Btn
