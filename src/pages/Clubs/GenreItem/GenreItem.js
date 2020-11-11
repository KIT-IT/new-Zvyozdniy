import React from 'react'
import {Link} from 'react-router-dom'

function GenreItem({title, text, to, src}) {
    return (
        <li className="genre-list__item">
            <div className="genre-flex">
                <div className="genre-info">
                    <div className="genre-title">
                        <h1 className="genre-title__text _title">{title}</h1>
                    </div>
                    <div className="genre-text">
                        <p className="genre-text__text">{text}</p>
                    </div>
                    <div className="genre-link button">
                        <Link to={to} className="genre-link__link">
                            <p className="genre-link__link_text">Подробнее</p>
                        </Link>
                    </div>
                </div>
                <div className="genre-img">
                    <img src={src} alt="genre" className="genre-img__img"/>
                </div>
            </div>
        </li>
    )
}

export default GenreItem
