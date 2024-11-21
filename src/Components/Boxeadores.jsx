import React from 'react';
import BoxeadoresCaja from './BoxeadoresCaja';
import boxeador1 from '../images/box1.png';
import boxeador2 from '../images/box2.png';
import boxeador3 from '../images/box3.png';
import boxeador4 from '../images/box4.png';
import boxeador5 from '../images/box5.png';
import boxeador6 from '../images/box6.png';

function Boxeadores() {
  return (
    <div id='boxeadores'>
        <h1>Boxeadores</h1>
        <div className='box-container'>
            <BoxeadoresCaja  image={boxeador1} nombre="Juan Leiva" edad='25 años' peso='68kg' altura='1.75cm'/>
            <BoxeadoresCaja  image={boxeador2} nombre="Marcelo Galo" edad='22 años' peso='75kg' altura='1.85cm'/>
            <BoxeadoresCaja  image={boxeador3} nombre="Pablo Heits" edad='26 años' peso='78kg' altura='1.79cm'/>
        </div>
        <div className='box-container2'> 
            <BoxeadoresCaja  image={boxeador4} nombre="Pepe Lalo" edad='28 años' peso='82kg' altura='1.81cm'/>
            <BoxeadoresCaja  image={boxeador5} nombre="Alex Lubocop" edad='38 años' peso='88kg' altura='1.95cm'/>
            <BoxeadoresCaja  image={boxeador6} nombre="Sergio Kamo" edad='27 años' peso='78kg' altura='1.77cm'/>
        </div>
    </div>
  ) 
}

export default Boxeadores;