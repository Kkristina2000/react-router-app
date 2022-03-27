import React from 'react';

import SearchPanel from '../search-panel/search-panel';

import search from '../../../img/icon/search.png';
import './top.css';

const CalendarTop = ({openForm}) =>{
    return(
        <div className='calendar-top'>
            <div className='calendar-top__buttons'>
                <button className='calendar-top__button' onClick={openForm}>Добавить</button>
                <button className='calendar-top__button' >Обновить</button>
            </div>
            <div className='calendar-top__search'>
                <img src={search} className='calendar-top__search-icon'/>
                <SearchPanel />
            </div>
        </div>
    );
};
export default CalendarTop;