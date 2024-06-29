import React from 'react';
import './Card_boton.css';

export default function CardButton({onClick, showImage}){
    return(
        <div className='button-contenedor'>
            <button onClick={onClick} 
            className={`button ${showImage ? 'show-info' : ''}`}>
                {showImage ? "Ver info" : "Ver foto"}
            </button>
        </div>
    )
}