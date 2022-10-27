import React, {useContext} from 'react';

// ---------------Import Styled Components
import {ContainerMobile} from './Style';

// ---------------Import Icons
import {FaAngleDown} from 'react-icons/fa';
import {AiOutlineCloseCircle} from 'react-icons/ai';

// ----------------- Import use context-----------
import { UserContext } from '../../App';

const Mobile = () => {
    const {marginValue, setMarginFunc} = useContext(UserContext);

    // --------- handle close button function ---------------
    const handleCloseBtn = () => {
        setMarginFunc('-800px')
    }
  return (
    <ContainerMobile style={{marginLeft: marginValue}}>
        <div className="close-btn">
            <span className='logo'>Infinty style</span> <span className='btn' onClick={handleCloseBtn}><AiOutlineCloseCircle/></span>
        </div>
        <div className="menu">
            <ul className="menu-ul">
                <li>Home</li>
                <li className='menu-name'><span> Pages <FaAngleDown/> </span></li>
                <li className='menu-name'><span> Categories<FaAngleDown/></span></li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    </ContainerMobile>
  )
}

export default Mobile
