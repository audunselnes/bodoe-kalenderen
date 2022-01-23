import React, {useEffect, useState} from 'react';
import EventItem, {IProps} from './components/EventItem';
import EventDate from './components/EventDate'
import requestData from './api/requestData'

function App() {
    const [data, setData] = useState<IProps[]|null>(null);

    useEffect(() => {
        requestData().then(a => setData(a))
    }, []);

    return(
        <div>
        <h1>Arrangementkalender</h1>
        <h3>Kalender med konserter, opera, teater, marked, idrett og annen underholdning i Bodø.</h3>
        {data?.map(event =>
            <EventItem {...event}> </EventItem>
            )}
        </div>
    );
}

export default App;
