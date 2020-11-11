import React, {useEffect, useRef, useState} from 'react';
import './Slider.scss'
import { sliderArr } from '../../configurations/sliderConfig'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";


function Slider() {
    const [x, setX] = useState(0)
    const timer = useRef(null)

    useEffect(() => {
        timer.current = setInterval(() => handleSliderRight(), 3000)
        console.log('mount')
        return () => {
            clearInterval(timer.current)
         }
    }, [x]) // eslint-disable-line react-hooks/exhaustive-deps


    const handleSliderLeft = () => {
       x === 0 ? setX(prevX => prevX + (-100 * (sliderArr.length - 1))) : setX(prevX => prevX + 100)
    }

    const handleSliderRight = () => {
        x === -100*(sliderArr.length - 1) ? setX(  prevX => prevX - (-100 * (sliderArr.length - 1))) : setX(prevX => prevX -100)
    }

    function autoSliderStop() {
        clearInterval(timer.current)
    }

    return (
            <div className="slider-body _container">
                <div className="slider-container">
                    <div onMouseEnter={autoSliderStop} onMouseLeave={handleSliderRight} className="slider">
                        {sliderArr.map(item => {
                           return (
                               <div className="slide" key={item.id} style={{transform: `translateX(${x}%)`}}>
                                   <img className="slide-img" src={item.src} alt={item.alt}/>
                               </div>
                           )
                        })}
                        <button onClick={handleSliderLeft} className="btn" id="left">
                            <FontAwesomeIcon className="btn__icon" icon={faAngleLeft} size={'2x'} color={'white'}/>
                        </button>
                        <button onClick={handleSliderRight} className="btn" id="right">
                            <FontAwesomeIcon className="btn__icon" icon={faAngleRight} size={'2x'} color={'white'}/>
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Slider