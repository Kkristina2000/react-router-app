import moment from 'moment';
import 'moment/locale/ru';

import { useState } from 'react';

import CalendarTop from '../components/calendar/top/top';
import Panel from '../components/calendar/panel/panel';
import Grid from '../components/calendar/grid/grid';
import Form from '../components/calendar/form/form';

import './calendar.css';

function Calendar(){
    const id=0;
    
    const [today,setToday] = useState(moment());
    const [event, setEvent] = useState(null);
    const [events, setEvents] = useState([]);
    const [isShowForm, setShowForm]=useState(false);
    const startDay = today.clone().startOf('month').startOf('week');

    const prevHandler = () => setToday(prev=>prev.clone().subtract(1,'month'));
    const nextHandler = () => setToday(next=>next.clone().add(1,'month'));
    const todayHandler = () => setToday(moment());

    const addEvent = (event) =>{
        const title=event.target.text.value;
        setEvent(title);
    };
    const openForm = () => {
        setShowForm(true);
    };
        return(
            <>
            {
                isShowForm ? (
                    <Form addEvent={addEvent} />
                ): null
            } 
            <CalendarTop openForm={openForm} />
            <Panel
                today={today}
                prevHandler = {prevHandler}
                nextHandler = {nextHandler}
                todayHandler = {todayHandler}
            />
            <Grid startDay={startDay} addEvent={addEvent}/>
            </>
        );
}
export {Calendar};