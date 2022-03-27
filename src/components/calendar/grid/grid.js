import moment from 'moment';
import React from 'react';

import './grid.css';
const Grid = ({startDay, addEvent}) =>{
    const totalDay=35;
    const day=startDay.clone().subtract(1, 'day');
    const daysArray = [...Array(totalDay)].map(()=>day.add(1,'day').clone());

    const isCurrentDay=(day)=>moment().isSame(day,'day');
    return(
        <>
        <div className='week'>
        {[...Array(7)].map((_,i) =>(
            <div className='week'>
                {moment().day(i+1).format('dddd')}
            </div>
        ))}
        </div>
        <div className='days'>
            {
                daysArray.map((dayItem)=>(
                    <div className='day' key={dayItem.format('DDMMYY')} >
                        {!isCurrentDay(dayItem) && dayItem.format('D')}
                        {isCurrentDay(dayItem) && <div className='currentday'>{dayItem.format('D')}{addEvent.title}</div>}
                    </div>
                ))
            }
        </div>
        </>
    );
};
export default Grid;
