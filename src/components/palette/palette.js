import React, {Component} from 'react';
import img from "../../image/color.png";
import acc1 from "../../image/ocre.jpg";
import acc2 from "../../image/accordeonTwo.jpg";
import acc3 from "../../image/accordeonThree.jpg";
import "./palette.css"


class Palette extends Component {
    render(){
    return(
        <div className="Container">
            < div className="Hero">
                <div className="title">
                <h1>On vous montre notre palette ?</h1>
                <h2>Et pour cette nouvelle version , nous avons selectionné des couleurs de la nature</h2>
                </div>
                <div className="ColorImage">
                    <img src={img} alt="PaletteCouleur"></img>
                </div>
        </div>
        <div className="Hero-second">
            <div className="TitleHs">
                <h1>Comment porter notre cardigan "Atelier Unes" ?</h1>
                <p>Alors là comme d'habitude c'est à VOUS de rêver, les possibilités sont multiples !</p>
            </div>
            <div className="Accordeon">
                <img src={acc2} alt ="acc1"></img>
                <img src={acc1} alt ="acc1"></img>
                <img src={acc3} alt ="acc1"></img>
            </div>
        </div>
        </div>

    )
}
}

export default Palette