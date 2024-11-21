import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link para la navegación

function Inicio() {
  return (
    <div id='main'>
      <div className='header-heading'>
        <h2>SIGUE EL RITMO</h2>
        <h1><span>MEJORA</span> CON NOSOTROS</h1>
        <p className='details'>Moldea tus habilidades y experiencias con nuestro dispositivo</p>
        <div className='pr-btns'>
          {/* Usamos Link para la navegación */}
          <Link to="/Entrenadores" className='header-btn'>Entrenadores</Link>
          <Link to="/Boxeadores" className='header-btn'>Boxeadores</Link>
        </div>
      </div>
    </div>
  );
}

export default Inicio;

/*header-btns*/ 





/*import React from 'react';




function Inicio() {
  return (
    <div id='main'>
      <div className='header-heading'>
        <h2>SIGUE EL RITMO</h2>
        <h1><span>MEJORA</span> CON NOSOTROS</h1>
        <p className='details'>Moldea tus habilidades y experiencias con nuestro
        dispositivo</p>
        <div className='header-btns'>

           <a href="#" className='header-btn'>UNETENOS</a>
           
           
        </div>
      </div>
    </div>
  )
}

export default Inicio;*/
