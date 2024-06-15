import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../components/Auth/AuthContext";

function UserCheck(){
    const {token} = useContext(AuthContext);
    const [msg, setMsg] = useState('');

    const config = {
        'method' : 'get',
        'url' : `${import.meta.env.VITE_BACKEND_URL}/scope-example/protecteduser`,
        'headers' : {
            'Authorization' : `Bearer ${token}`
        }
    };

    useEffect(() => {
        axios(config).then((response) => {
            console.log("Enviaste un token bueno y estas logueado !!!");
            setMsg("Enviaste un token bueno y estas logueado !!!")
        }).catch((error) => {
            console.log("Hubo un error, no estas logueado o tu token expiró.");
            setMsg("Hubo un error, no estas logueado o tu token expiró.");
            console.log(error);
        })
    }, []);

    return (
        <div>
            <h1>{msg}</h1>
        </div>
    );
}

export default UserCheck;