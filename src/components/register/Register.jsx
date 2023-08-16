import  { useState } from 'react';
import axios from 'axios';
import './style.scss'

const Register = ({ user, password }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3000/users', {
        username: newUsername,
        password: newPassword
      });

      alert('Nuevo usuario registrado exitosamente.');

      // Limpia los campos después de registrar el usuario
      setNewUsername('');
      setNewPassword('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-form">
      <h1>Registrar Nuevo Usuario</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="newUsername">Nuevo Usuario:</label>
        <input
          type="text"
          id="newUsername"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          required
        />
        <label htmlFor="newPassword">Nueva Contraseña:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Registrar Usuario</button>
      </form>
    </div>
  );
};

export default Register;
