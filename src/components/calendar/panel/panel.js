import React from 'react';
import left from '../../../img/icon/left.png';
import right from '../../../img/icon/right.png';

import './panel.css';

const Panel = ({today,prevHandler,nextHandler,todayHandler}) =>{
    return(
        <div className='toggle'>
            <div className='toggle-mounth'>
                <button className="toggle-mounth__button" onClick={prevHandler}>
                    <img src={left} className="icon-toggle" />
                </button>
                <div className="toggle-mounth__text">{today.format('MMM YYYY')}</div>
                <button className="toggle-mounth__button" onClick={nextHandler}>
                    <img src={right} className="icon-toggle"/> 
                </button>
            </div>
            <button className="toggle-today" onClick={todayHandler}>Cегодня</button>
        </div>
    );
};
export default Panel;
