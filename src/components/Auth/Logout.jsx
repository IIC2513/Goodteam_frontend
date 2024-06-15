import React, { useContext, useState} from 'react';
import './LoginPage.css';
import { AuthContext } from './AuthContext';

const LogoutButton = () => {
    const { logout } = useContext(AuthContext);
    const [msg, setMsg] = useState('');

    const handleLogout = () => {
        logout();
        setMsg('You have been logged out');
    }

    return (
        <> 
        <button className='logoutbutton' onClick={handleLogout}>Cerrar sesión</button>
        {msg. length > 0 && <div className='successMsg'> {msg} </div>}
        </>
    );
}

export default LogoutButton;