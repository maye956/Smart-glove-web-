import React from 'react';
import aboutimage from '../images/about.png';

function Acercade() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt="" />
        </div>
        <div className='about-text'>
            <h1>ACERCA DE NUESTRO PROYECTO</h1>
            <p>Somos una empresa dedicada a la proyección y a la mejora humana, 
                en lo deportivo en la industria del box.
                Logrando sacar el mejor poncencial a travez de nuestros productos,
                de todos nuestros clientes.</p>
                <button>LEER MAS</button>
        </div>
    </div>
  )
}

export default Acercade;
