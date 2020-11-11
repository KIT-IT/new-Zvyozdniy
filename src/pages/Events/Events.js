import React from 'react'
import './Events.scss'
import { eventsConfig } from '../../configurations/eventsConfig'
import EventsItem from './EventsItem/EventsItem'

function Events({month}) {
    const list = eventsConfig.map(item => {
        return (
            <EventsItem 
                key={item.id}
                eventDay={item.eventDay}
                eventDayNumber={item.eventDayNumber}
                eventInfoDate={item.eventInfoDate}
                eventInfoTitle={item.eventInfoTitle}
                eventDiscription={item.eventDiscription}
                eventPlace={item.eventPlace}
                eventCost={item.eventCost}
                eventsImgSrc={item.eventImgSrc}
            />
        )
    })

    return (
        <div className="events">
            <div className="events__body _container">
                <div className="events__body_title">
                    <h1 className="_title">Мероприятия</h1>
                </div>
                <div className="events__month">
                     <h2 className="events__month_title _subtitle">{month}</h2>
                </div>
                <div className="events-content">
                    <ul className="events-list">
                        {list}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Events
