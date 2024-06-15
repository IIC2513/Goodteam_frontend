import React, { useState, useContext } from 'react';
import axios from 'axios';
import './LoginPage.css';
import { AuthContext } from '../../components/Auth/AuthContext';

function LoginPage() {
    const {token, setToken} = useContext(AuthContext);
    const {user_id, setUserId} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState(null);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const endpoint = isSignUp ? '/signup' : '/login';
            // const requestData = isSignUp ? { email, password, username } : { email, password };
            const requestData = isSignUp ? { email, password, username, address } : { email, password };
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}${endpoint}`, requestData);
            console.log(response)
            const access_token = response.data.access_token;
            const access_user_id = response.data.id;
            setToken(access_token);
            setUserId(access_user_id);
            window.location.href = '/MainPage';
        } catch (err) {
            console.log(response)
            setError(isSignUp ? 'Registration failed' : 'Invalid email or password');
        }
    };

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
        setError(null);
    }

    return (
        <div className={`login-container ${isSignUp ? 'sign-up' : ''}`}>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>{isSignUp ? 'Sign Up' : 'Log in'}</h2>
                {error && <p className="error-message">{error}</p>}

                {isSignUp && (
                    <div className='form-group'>
                        <label htmlFor='username'>Username:</label>
                        <input
                            type='text'
                            id='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                )}
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

                {isSignUp && (
                    <div className='form-group'>
                        <label htmlFor='address'>Address:</label>
                        <input
                            type='text'
                            id='address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                )}

                <button className='loginbutton' type="submit">{isSignUp ? 'Sign Up' : 'Log in'}</button>
                <button className="loginbutton" type="button" onClick={toggleForm}>
                    {isSignUp ? 'Already have an account? Log In' : 'Don\'t have an account? Sign Up'}
                </button>

                {/* <div className="form-group">
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
                <button className='loginbutton' type="submit">{isSignUp ? 'Sign Up' : 'Log in'}</button>
                <button className="loginbutton" type="button" onClick={toggleForm}>
                    {isSignUp ? 'Already have an account? Log In' : 'Don\'t have an account? Sign Up'}
                </button> */}
            </form>
        </div>
    );
}

export default LoginPage;
