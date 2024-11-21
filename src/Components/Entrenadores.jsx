import React from 'react';
import { Link } from 'react-router-dom';

function Productos() {
    return (
        <div id='main'>
            <div className='pr-heading'>
                <h1>COACH</h1> <br /><h1><span>CHARLIE</span></h1>
                <br />
                <br />
                <br />
                <br />
                <p className='details'>
                    <b>Nuestra app se pone a tono con las necesidades y las demandas más óptimas.</b>
                </p>
                <div className='pr-btns'>
                    <Link to="/boxeadores" className='pr-btn'>ELEGIR BOXEADOR</Link>
                    <Link to="/perfil" className='pr-btn'>CAMBIAR PERFIL</Link>
                </div>
            </div>
        </div>
    );
}

export default Productos;




/*import React from 'react';

function Productos() {
  return (
    <div id='offer'>
        <div className='pr-heading'>
            <h1>COACH</h1> <br /><h1><span>CHARLIE</span></h1>
            <br/>
            <br/>
            <br/>
            <br/>
             <p className='details'><b>Nuestra app se pone a tono con las necesidades y
               las demandas mas óptimas.
               </b></p>
            <div className='pr-btns'>
                <a href="" className='pr-btn'>ELEGIR BOXEADOR</a>
                
                <a href="" className='pr-btn'>CAMBIAR DE PERFIL</a>
            </div>
        </div>
    </div>
  )
}

export default Productos*/
