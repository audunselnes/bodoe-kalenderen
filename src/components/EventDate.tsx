import React from 'react';
import './EventDate.css'

const EventItem: React.FC<{date: Date}> = (props) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month= props.date.toLocaleString('en-US', {month: 'short'});
    const day= props.date.toLocaleString('en-US', {day: '2-digit'});
    const dayName= days[props.date.getDay()]

    return <div className='event-date'>
        <div className= 'event-date_dayName'>{dayName}</div>
        <div className= 'event-date'>
            <span className='event-date_day'>{day}.{month}</span>
        </div>
    </div>
}

export default EventItem;