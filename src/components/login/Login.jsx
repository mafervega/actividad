import  { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Register from '../register/Register';
import './style.scss'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showNuevoUsuarioForm, setShowNuevoUsuarioForm] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3000/users?username=${username}&password=${password}`);

      if (response.data.length > 0) {
        Swal.fire({
          icon: 'success',
          title: 'Verificación Exitosa',
          text: 'El usuario ha sido verificado correctamente.',
          showConfirmButton: false,
          timer: 2000
        });
      } else {
        setShowNuevoUsuarioForm(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-form">
      <h1>Verificación de Usuario</h1>
      {!showNuevoUsuarioForm ? (
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Verificar Usuario</button>
        </form>
      ) : (
        <Register username={username} password={password} />
      )}
    </div>
  );
};

export default Login;
