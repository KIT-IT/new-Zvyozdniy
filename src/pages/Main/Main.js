import React from 'react';
import './Main.scss'
import Slider from '../../components/Slider/Slider';

function Main() {
    return (
        <div className="main wrapper">
            <div className="preview">
                <h1 className="_title">Дом Культуры ЗВЁЗДНЫЙ</h1>
            </div>
            <div className="slider">
                <Slider/>
            </div>
        </div>
    );
}

export default Main;