import React, { useContext, useState} from 'react';
import '../../pages/SessionPages/LoginPage.css'
import { AuthContext } from './AuthContext';

const LogoutButton = () => {
    const { logout } = useContext(AuthContext);
    const [msg, setMsg] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const handleLogout = () => {
        logout();
        setMsg('Has cerrado sesión exitosamente.');
        setModalOpen(true);
        setTimeout(() => {
            setModalOpen(false);
            window.location.href = '/';
        }, 2000);
    }

    const closeModal = () => {
        setModalOpen(false);
        setMsg('');
    }

    return (
        <> 
            <button className='logoutbutton' onClick={handleLogout}>Cerrar sesión</button>
            {modalOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={closeModal}>&times;</span>
                        <p>{msg}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default LogoutButton;