import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nu5jwog', 'template_occ8a9l', form.current, '4naw_RdMyQTtjANVq')
      .then(
        () => {
          alert('Correo enviado exitosamente!');
        },
        (error) => {
          alert(`Error al enviar el correo: ${error.text}`);
        }
      );
  };

  return (
    <div id='contact'>
      <h1>CONTACTANOS</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" placeholder='Nombre' name="user_name" required />
        
        <label>Correo</label>
        <input type="email" placeholder='Correo' name="user_email" required />
        
        <label>Mensaje</label>
        <textarea placeholder='Mensaje' name="message" required />
        
        <button type="submit" className="send-button">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
