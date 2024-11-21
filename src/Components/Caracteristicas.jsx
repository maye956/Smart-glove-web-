import React from 'react';
import CaracteristicasCaja from './CaracteristicasCaja';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';


function Caracteristicas() {
  return (
    <div id='features'>
        <h1>Caracteristicas</h1>
        <div className='a-container'>
            <CaracteristicasCaja image={fimage1} title="Levantamiento de Pesas"/>
            <CaracteristicasCaja image={fimage2} title="Mejorar nuestra musculación"/>
            <CaracteristicasCaja image={fimage3} title="Tener un cuerpo fuerte y flexible"/>
            <CaracteristicasCaja image={fimage4} title="Ejercicios de Cardio"/>
        </div>
    </div>
  )
}

export default Caracteristicas;
