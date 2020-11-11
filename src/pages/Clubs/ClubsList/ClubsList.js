import React from 'react'
import './ClubsList.scss'
import ClubsListItem from './ClubsListItem/ClubsListItem'


function ClubsList({clubsList}) {
    const list = clubsList.map(item => {
        return (
           <ClubsListItem 
                key={item.id}
                club={item.club}
                group={item.group}
                age={item.age}
                info={item.info}
                manage={item.manage}
                managePhoto={item.managePhoto}
                shedule={item.shedule}
                code={item.code}
           />
        )
    })

    return (
        <div className="clubsList">
            <div className="clubsList__body _container">
                <ul className="clubsList__list">
                    {list}
                </ul>
            </div>
        </div>
    )
}

export default ClubsList
