import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Inicio from './Components/Inicio';
import Caracteristicas from './Components/Caracteristicas';
import Productos from './Components/Productos';
import Acercade from './Components/Acercade';
import Boxeadores from './Components/Boxeadores';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';
import Registro from './Registro';
import Entrenadores from './Components/Entrenadores';
import Login from './login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/caracteristicas" element={<Caracteristicas />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/entrenadores" element={<Entrenadores />} />
          <Route path="/boxeadores" element={<Boxeadores />} />
          <Route path="/acercade" element={<Acercade />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/registro" element={<Registro />} /> 
          <Route path="/login" element={<Login />} /> 
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

/*<Route path="/" element={<Productos />} />*/