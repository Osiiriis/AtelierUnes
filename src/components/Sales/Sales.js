import React, { useState } from "react";
import "./Sales.css";
import {TextItem} from "./TextItem";

export default function App() {
    const [textSelected, setTextSelected] = useState(<p>Après les retours de nos clientes nous avons encore amélioré ce classique : <ul><li>Une coupe ajustée après un an d'utilisation</li><li>A porter ouvert, fermé de manière réversible.</li><li>Tricotage double fils</li><li>Coton GOTS & Teinture OEKO-TEX</li></ul>
    </p>);

    const selectLi = (id) => {
      let index = TextItem.findIndex((x) => x.id === id);
      if (index === -1) return;
      setTextSelected(TextItem[index].value);
    };
    return (
      <>
        <div className="Container">
            <div className="Title"><h1>Le Cardigan Durable V2</h1>
            <p className="price">€112.00</p></div>
            <div className="Selected">
        <ul className="ItemCollection">
          {TextItem.map((x) => (
            <li className="bibi"
              onClick={() => {
                selectLi(x.id);
              }}
            >
              {x.id}
            </li>
          ))}
        </ul>
        </div>
            <div className="TextDes">{textSelected}</div>
        <div className="ColorSize">
          <select name="color" className="ColorChoose">
                <option value="Verteau">Verteau</option>
                 <option value="Black">Black</option>
                 <option value="Ocre">Ocre</option>
                 <option value="BleuGris">Bleu-Gris</option></select>
                <ul className = "marre"><li>XS</li><li>S</li><li>M</li><li>L</li><li>XL</li><li>XXL</li>
                    </ul>
                 </div>
        <div className="buy"><button>Il m'en faut un <i class="far fa-heart"></i></button><p>On vous livre sous 4 jours Max, promis.</p></div>
        <div className="info"></div>
        </div>
      </>
    );
  }
 

