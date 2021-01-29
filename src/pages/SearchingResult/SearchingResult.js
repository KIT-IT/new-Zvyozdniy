import React from 'react';
import {res} from "../../components/SearchingInput/SearchingInput";

function SearchingResult() {
    const ar = res
    const r = new Set(res)
    const d = Array.from(r)
    console.log(ar)

    return (
        <div className="search-result wrapper">
            <div className="search-result__body _container">
                <div className="search-result__title">
                    <p className="search-result__title_text">Мы нашли кое-что для вас: </p>
                </div>
                <div className="search-result__content">
                    <ul className="search-list">
                        {
                            d.map(item => {
                                return (
                                    <li key={item.id}>
                                        <p>{item.title}</p>
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