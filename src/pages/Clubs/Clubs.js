import React from 'react'
import './Clubs.scss'
import { clubsGenres } from '../../configurations/clubsGenres'
import GenreItem from './GenreItem/GenreItem'

function Clubs() {
    const list = clubsGenres.map(item => {
        return (
            <GenreItem 
                key={item.id}
                title={item.title}
                text={item.text}
                to={item.to}
                src={item.src}
            />
        )
    })

    return (
        <div className="clubs wrapper">
            <div className="clubs__body _container">
                <ul className="genre-list">
                    {list}
                </ul>
            </div>
        </div>
    )
}

export default Clubs
