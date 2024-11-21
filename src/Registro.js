import React from 'react';
import Navbar from './Components/Navbar';


function Registro() {
  return (
    <div id="Registro">
      <Navbar />
      <div className="registro-container">
        <h2>Registro de Usuario</h2>
        <form>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" placeholder='Nombre' name="nombre" required />
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" placeholder='Apellido' name="apellido" required />
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder='Correo' name="email" required />
            <label htmlFor="usuario">Usuario</label>
            <input type="text" id="usuario" placeholder='Usuario' name="usuario" required />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder='Contraseña' name="password" required />
            <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
