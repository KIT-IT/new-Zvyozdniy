import React from 'react';
import {Link} from "react-router-dom";
import {useSearchContext} from "../../context/inputSearchContext";


function SearchingResult() {
    const {ar} = useSearchContext()

    return (
        <div className="search-result wrapper">
            <div className="search-result__body _container">
                <div className="search-result__title">
                    {
                        ar.length === 0
                        ? <p className="search-result__title_text">Ничего не найдено </p>
                        : <p className="search-result__title_text">Мы нашли кое-что для вас: </p>
                    }
                </div>
                <div className="search-result__content">
                    <ul className="search-list">
                        {
                            ar.map(item => {
                                return (
                                    <li key={item.id}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchingResult;