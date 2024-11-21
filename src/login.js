import React from 'react';
import Navbar from './Components/Navbar';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

function Registro() {
  const navigate = useNavigate(); // Instanciar el hook

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario
    navigate('/'); // Redirigir a la página de Inicio
  };

  return (
    <div id="Registro">
      <Navbar />
      <div className="registro-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" id="email" placeholder="Correo" name="email" required />
          <label htmlFor="usuario">Usuario</label>
          <input type="text" id="usuario" placeholder="Usuario" name="usuario" required />
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Contraseña" name="password" required />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default Registro;



/*import React from 'react';
import Navbar from './Components/Navbar';


function Registro() {
  return (
    <div id="Registro">
      <Navbar />
      <div className="registro-container">
        <h2>Login</h2>
        <form>
            <input type="email" id="email" placeholder='Correo' name="email" required />
            <label htmlFor="usuario">Usuario</label>
            <input type="text" id="usuario" placeholder='Usuario' name="usuario" required />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder='Contraseña' name="password" required />
            <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default Registro;*/
