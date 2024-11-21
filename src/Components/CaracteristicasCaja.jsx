import React from 'react';

function CaracteristicasCaja(props) {
  return (
    <div className='a-box'>
        <div class='a-b-img'>
            <img src={props.image} alt="" />
        </div>
        <div className='a-b-text'>
            <h2> {props.title} </h2>
            <p>Agregar Caracteristicas</p>
        </div> 
    </div>
  )
}

export default CaracteristicasCaja;
