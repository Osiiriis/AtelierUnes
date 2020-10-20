import React from 'react';
import { Parallax } from 'react-parallax';
import './Parralax.css'

const image1 =
  "https://cdn.shopify.com/s/files/1/2378/9469/files/Atelier_Unes_-_cardigan_durable_en_coton_bio_bleu_gris_1024x@3x.progressive.jpg?v=1594055900";

  
  function App() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Parallax bgImage={ image1 } strength={500}>
          <div style={{ height: 500 }}>
            <div className='NameDes'><p className="text">Nos cardigans c'est d'abord une question de matière</p></div>
          </div>
        </Parallax>
        </div>
    )}
      


export default App;