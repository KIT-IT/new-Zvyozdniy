import React from 'react'
import { clubsGenres } from '../../configurations/clubsPageConfigurations/clubsGenresConfig'
import GenreItem from './GenreItem/GenreItem'
import PagePreview from "../../components/PagePrewievImageNavigation/PagePreview";

function Clubs() {
    const list = clubsGenres.map(item => {
        return (
            <GenreItem 
                key={item.id}
                title={item.title}
                to={item.to}
                src={item.src}
                clubsCount={item.clubsCount}
                age={item.age}
                gender={item.gender}
                level={item.level}
            />
        )
    })

    return (
        <div className="clubs wrapper">
            <PagePreview
                title={"Клубные Формирования"}
                backgroundImage={require("../../assets/images/backgroundImages/clubsBackground.jpg")}
                isNested={true}
                secondPageName={"Клубы"}
            />
            <div className="clubs-body _container _content">
                <h1 className="_subtitle">Направления</h1>
                <ul className="genre-list">
                    {list}
                </ul>
            </div>
        </div>
    )
}

export default Clubs
