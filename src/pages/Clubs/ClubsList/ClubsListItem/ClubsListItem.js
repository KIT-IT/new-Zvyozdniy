import React from 'react'

function ClubsListItem({key, club, group, age, info, manage, managePhoto, shedule, code}) {
    return (
        <li key={key} className="clubsListItem">
           <div className="clubsListItem__body _container">
                <div className="clubItem-main">
                    <div className="clubItem-main__club">
                        <h1 className="clubItem-main__club_text _title">{club}</h1>
                    </div>
                    <div className="clubItem-main__group">
                        <h1 className="clubItem-main__group_text _title">{group}</h1>
                    </div>
                    <div className="clubItem-main__age">
                        <h2 className="clubItem-main__age_text _subtitle ">{age}</h2>
                    </div>
                    <div className="clubItem-main__info">
                        <span className="clubItem-main__info_text">{info}</span>
                    </div>
                </div>
                <div className="clubItem-info">
                    <div className="clubItem-info__manage">
                        <span className="clubItem-info__manage_name">Руководитель группы: {manage}</span>
                    </div>
                    <div className="clubItem-info__photo">
                        <img className="clubItem-info__photo_photo" src={managePhoto} alt="manage"/>
                    </div>
                    <div className="clubItem-info__shedule">
                        <span className="clubItem-info__shedule_text">Расписание занятий: {shedule}</span>
                    </div>
                    <div className="clubItem-info__code">
                        <span className="clubItem-info__code_code">Код группы для записи через mos.ru: {code}</span>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ClubsListItem
