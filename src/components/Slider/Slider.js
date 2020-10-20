import React, { useState} from 'react';
import './Slider.css';
import Images from "./Images.js"


export default function Slider(){
    const [Selected, setSelectedImg]  = useState(Images[0]);

        return (
        <div className="AppSlider">
        <div className= "grid-container">
        <img className="ImgSelected" src={Selected} alt="SelectedImg"></img>
        <div className="imgContainer">
            {Images.map((img,index) => (
                <img key={index} src={img} alt="ContainerImg" onClick={() => setSelectedImg(img)}/>
            ))}
        </div>
        </div>
        </div>

        );
}

