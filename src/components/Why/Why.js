import React, {Component} from 'react';
import women from "../../image/femme.jpg"
import "./Why.css"

class Why extends Component {
    render(){
    return(
        <div className="ContainerWhy">
        <div className="ImagePort"><img src={women} alt="Portugal"></img>
        <div className="DesWhy">
        <h1>Une matière d'exception</h1>
        <p>On est allé chercher les meilleurs en maille rectiligne. Et pour ça on est allé chez une maison familiale Portugaise qui depuis 1880, transmet son savoir-faire de génération en génération.
            Si bien que même le grand Karl Lagerfeld faisait produire ses pièces chez eux.</p>
            
        
        <p>On a choisi un tricotage à deux fils pour un max de robustesse. 
         Autant vous le dire notre Cardigan "Atelier unes" n'est pas là pour se détentre. 
         Envie d'être dans un nuage ? Avec du coton 100% bio c'est la douceur que notre cardigan vous propose.
         Et aucun risque de boulouche, on a selectionné de la maille en coton bio certifié "Got" pour leur dire adieu.
         </p>
        </div>
        </div>
        </div>

    )
}
}

export default Why