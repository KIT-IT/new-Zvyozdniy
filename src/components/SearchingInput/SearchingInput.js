import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import  {Redirect} from "react-router-dom";
import {
    artClubs,
    circusClubs, danceClubs,
    earlyDevelopmentClubs, longevityClubs, theatreClubs, vocalClubs
} from "../../configurations/clubsPageConfigurations/clubsListsConfig";

export const res = []


function SearchingInput() {
    const [searchInputValue, setSearchInputValue] = useState('')
    const [redirect, setRedirect] = useState(false)

    const bigData = []
    const infoData = []


    bigData.push(earlyDevelopmentClubs, circusClubs, artClubs, vocalClubs, danceClubs, theatreClubs, longevityClubs)
    bigData.map(arr => {
        arr.forEach(ar => {
            infoData.push(ar.group)
        })
        return infoData
    })


    res.push(infoData.filter(i => i.toLowerCase().includes(searchInputValue.toLowerCase())))



    function onKeyDownHandler(event) {
        if (event.key === 'Enter') {
            // window.location = 'http://localhost:3000/contacts';
            setRedirect(true)
        }
    }

    function onKeyUpHandler(event) {
        if (event.key === 'Enter') {
            setRedirect(prevState => !prevState)
        }
    }





    return (
        <div className="header-info-search">
            {
                redirect
                ? <Redirect to={'/search/'} />
                : null
            }
            <FontAwesomeIcon className="header-info-search__img icon element-with-changing-styles" icon={faSearch}  color={'#fff'}/>
            <input onKeyUp={onKeyUpHandler} onKeyDown={onKeyDownHandler} onChange={e => setSearchInputValue(e.target.value)} type="text" className="header-info-search__input input element-with-changing-styles" placeholder="Поиск по сайту"/>
        </div>
    );
}

export default SearchingInput;