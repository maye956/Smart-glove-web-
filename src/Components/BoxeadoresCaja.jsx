import React from 'react';

function BoxeadoresCaja(props) {
  return (
    <div className='caja-box'>
      <div class='box-img'>
          <img src={props.image} alt="" />
      </div>
      <div className='box-text'>
          <h2> Caracteristicas </h2>
          <p>Nombre: {props.nombre} </p>
          <p> {props.edad} </p>
          <p> {props.peso} </p>
          <p> {props.altura} </p>
      </div> 
    </div>
  )
}

export default BoxeadoresCaja;