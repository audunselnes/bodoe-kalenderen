import EventDate from './EventDate';
import './EventItem.css';

export interface IProps{
        title: string;
        description: string,
        link: string
        img: string
}

const EventItem: React.FC<IProps> = ({ title, description, link, img }) => {
            return (
                <li className = "event-item">
                    <div className= 'event-date'>{<EventDate date={new Date} />}</div>
                    <div className= 'event-description'>
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                    </div>
                    <div className= 'availability'>{link}</div>    
                </li>
            )
    }
export default EventItem;