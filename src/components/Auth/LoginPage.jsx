import React, { useState, useContext } from 'react';
import axios from 'axios';
import './LoginPage.css';
import { AuthContext } from './AuthContext';

function LoginPage() {
    const {token, setToken} = useContext(AuthContext);
    const {user_id, setUserId} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // vamos a enviar un post a la ruta login
        // axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`,
        // {
        //     email,
        //     password
        // }).then((response) => {
        //     // uno entra acá si no hay error en el request
        //     console.log("bloque then");
        //     setError(false);
        //     console.log("Logeaste correctamente");

        //     const token = response.data.access_token;
        //     localStorage.setItem('token', token);
        // }).catch((error) => {
        //     console.log("bloque catch");
        //     setError(true);
        //     console.log(error)
        // })

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, { email, password });
            // Guardar el token de autenticación en localStorage o cookies
            const access_token = response.data.access_token;
            const access_user_id = response.data.id;
            setToken(access_token);
            setUserId(access_user_id);
            // Redirigir al usuario a la página principal o a la página deseada
            window.location.href = '/MainPage';
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
