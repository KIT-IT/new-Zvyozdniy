import React, {useContext, useState} from "react";
import {searchingInputLinksConfig} from "../configurations/searchingInputLinks/searchingInputLinksConfig";

const SearchInputContext = React.createContext()

export const useSearchContext = () => {
    return useContext(SearchInputContext)
}

export const SearchProvider = ({children}) => {
    const [searchInputValue, setSearchInputValue] = useState('')
    const [ar,setAr] = useState([])

    const handleChange = event  => {
        setSearchInputValue(event.target.value)
    }

    const cleanAr = (ar) => {
        return setAr([])
    }


    const filteredAr = () => searchingInputLinksConfig.map(item => (
        item.keywords.filter(elem => {
            if (searchInputValue === '') {
               return  console.log('empty')
            } else if (elem.toLowerCase().includes(searchInputValue.toLowerCase())) {
                setAr(prev => (
                    [...prev, {
                        name: item.name,
                        link: item.to,
                        id: item.id
                    }]
                ))
            }
        })
    ))

    console.log(ar)


    return (
        <SearchInputContext.Provider value={{
            cleanAr,
            handleChange,
            searchInputValue,
            filteredAr,
            ar
        }}>
            {children}
        </SearchInputContext.Provider>
    )
}