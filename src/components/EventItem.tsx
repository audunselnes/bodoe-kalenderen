import EventDate from './EventDate';
import './EventItem.scss';

export interface IProps{
        title: string;
        date: string,
        location: string,
        link: string
        image: string
}

const EventItem: React.FC<IProps> = ({ title, date, location, link, image }) => {
    console.log(image);
            return (
                    <a className= "event-item" href= {link}>
                    <div>
                    <div className= 'event-date'>{date}</div>
                    <div className= 'event-description'>
                    <h2>{title}</h2>
                    <h3>{location}</h3>
                    </div>
                    </div>
                    <img src={ image } style={{height: 50, width: 100 }} alt = "logo" />
                    </a>
            )
    }
export default EventItem;