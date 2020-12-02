import React, { useEffect, useState } from 'react'
import './VisImpaired.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFont} from '@fortawesome/free-solid-svg-icons'


function VisImpared({visImpared ,setVisImpared}) {
    const [fontSize, setFontSize] = useState(' ')
    const [background, setBackground] = useState({
        color: 'none',
        ground: 'none'
    })
    const [bodyLetterSpacing, setBodyLetterSpacing] = useState(' ')
    const [bodyLineHeight, setBodyLineHeight] = useState(' ')
    const [imagesVisual, setImagesVisual] = useState(' ')
    const imagesNodeList = document.querySelectorAll('img')
    const handleClick = () => {
        setVisImpared(!visImpared)
        setDefaultStyles()
    }
    const defaultBodyStyles = {
        fontSize: '17px',
        color: '#3b3b3b',
        background: 'none',
        letterSpacing: '1px'
    }

    function setDefaultStyles() {         
        document.body.style = defaultBodyStyles
        imagesNodeList.forEach(img => img.style.display = 'block')
        console.log('Styles is default');
    }
    useEffect(() => {
        document.body.style.fontSize = fontSize
        document.body.style.backgroundColor = background.ground
        document.body.style.color = background.color
        document.body.style.letterSpacing = bodyLetterSpacing
        document.body.style.lineHeight = bodyLineHeight
        imagesNodeList.forEach(img =>  img.style.display = imagesVisual)
        console.log('changed');
        // return () => {
        //     document.body.style = defaultBodyStyles
        //     imagesNodeList.forEach(img => img.style.display = 'block')
        //     console.log('Styles is default');
        // }
    })
        


    // useEffect(() => { //! На случай бага работы в одном useEffect можно использовать второй
    //     document.body.style = {
    //         fontSize: fontSize,
    //         backgroundColor: background.ground,
    //         color: background.color
    //     }
    //     return () => {
    //         document.body.style = styles
    //         imagesNodeList.forEach(img => img.style.display = 'block')
    //         console.log('Styles is default');
    //     }
    // }, [])

    return (
        <div className="visImpaired">
            <div className="visImpaired-body _container">
                <div className="view-block visBlock">
                    <p className="view-block__text">Версия для слабовидящих: </p>
                    <button className="view-block__button" onClick={handleClick}>Выкл</button>
                </div>
                <div className="letterSpaicing-block visBlock">
                    <p className="letterSpaicing-block__text">Межбуквенный интервал: </p>
                    <div className="letterSpaicing-block-buttons">
                        <div className="letterSpaicing-block-buttons__body">
                            <button className="letterSpaing-block-buttons__body_button" onClick={() => setBodyLetterSpacing('1px')}>Одинарный</button>
                        </div>
                        <div className="letterSpaicing-block-buttons__body">
                            <button className="letterSpaing-block-buttons__body_button" onClick={() => setBodyLetterSpacing('1.5px')}>Полуторный</button>
                        </div>
                        <div className="letterSpaicing-block-buttons__body">
                            <button className="letterSpaing-block-buttons__body_button" onClick={() => setBodyLetterSpacing('2px')}>Двойной</button>
                        </div>
                    </div>
                </div>
                <div className="fontSize-block visBlock">
                    <p className="fontSize-block__text">Размер шрифта: </p>
                    <div className="fontSize-block__icons">
                        <div className="fontSize-block__icons_icon" onClick={() => setFontSize('17px')}>
                            <FontAwesomeIcon icon={faFont} size={'xs'}/>
                        </div>
                        <div className="fontSize-block__icons_icon" onClick={() => setFontSize('20px')}>
                            <FontAwesomeIcon icon={faFont} size={'sm'} />
                        </div>
                        <div className="fontSize-block__icons_icon" onClick={() => setFontSize('25px')}>
                            <FontAwesomeIcon icon={faFont} size={'lg'}/>
                        </div>
                    </div>
                </div>
                <div className="img-block visBlock" >
                    <p className="img-block__text">Изображения: </p>
                    <button className="img-block__button" onClick={() => imagesVisual === 'none' ? setImagesVisual('block') : setImagesVisual('none')}>Выкл</button>
                </div>
                <div className="lineHeight-block visBlock">
                    <p className="lineHeight-block__text">Межстрочный интервал: </p>
                    <div className="lineHeight-block-buttons">
                        <div className="lineHeight-block-buttons__body">
                            <button className="ineHeight-block-buttons__body_button" onClick={() => setBodyLineHeight('1')}>Стандартный</button>
                        </div>
                        <div className="lineHeight-block-buttons__body">
                            <button className="ineHeight-block-buttons__body_button" onClick={() => setBodyLineHeight('1.5')}>Средний</button>
                        </div>
                        <div className="lineHeight-block-buttons__body">
                            <button className="ineHeight-block-buttons__body_button" onClick={() => setBodyLineHeight('2')}>Большой</button>
                        </div>
                    </div>
                </div>
                <div className="background-block visBlock">
                    <p className="background-block__text">Цветовая схема:</p>
                    <div className="background-block__icons">
                        <div className="background-block__icons_icon">
                            <FontAwesomeIcon icon={faFont} size={'sm'} onClick={() => setBackground({color: 'black', ground: 'white'})}/>
                        </div>
                        <div className="background-block__icons_icon">
                            <FontAwesomeIcon icon={faFont} size={'sm'} color={'white'} onClick={() => setBackground({color: 'white', ground: 'black'})}/>
                        </div>
                        <div className="background-block__icons_icon">
                            <FontAwesomeIcon icon={faFont} size={'sm'} color={'#063462'} onClick={() => setBackground({color: '#063462', ground: '#9DD1FF'})}/>
                        </  div>
                        <div className="background-block__icons_icon">
                            <FontAwesomeIcon icon={faFont} size={'sm'} color={'#A9E44D'} onClick={() => setBackground({color: '#A9E44D', ground: '#3B2716'})}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisImpared
