import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import  {Redirect} from "react-router-dom";
import {useSearchContext} from "../../context/inputSearchContext";


function SearchingInput() {
    const [redirect, setRedirect] = useState(false)
    const {filteredAr, handleChange, searchInputValue,ar, cleanAr} = useSearchContext()




    function onKeyDownHandler(event) {
        if (event.key === 'Enter' && searchInputValue !== '') {
            setRedirect(true)
            if (ar.length > 0) {
                cleanAr()
            } else {
                filteredAr()
            }
        }
    }

    function onKeyUpHandler(event) {
        if (event.key === 'Enter') {
            setRedirect(false)
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
                <input onKeyUp={onKeyUpHandler} onKeyDown={onKeyDownHandler} onChange={handleChange} type="text" className="header-info-search__input input element-with-changing-styles" placeholder="Поиск по сайту"/>
            </div>
    );
}

export default SearchingInput;