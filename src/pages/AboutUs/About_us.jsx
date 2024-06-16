import './About_us.css'
import React from 'react'
import Board from '../../components/tableros/Board.jsx'

function About_us() {
    return (
        <div className='content'>
            <h1>About us</h1>
            <div className='intro'>
                <p>La Kantina es un emprendimiento que surge por la necesidad de crear una plataforma de comercio electrónico que se
                    diferencie del resto. Buscamos ofrecer un servicio que brinde a nuestros clientes una experiencia  de navegación eficiente y segura,
                    en donde puedan encontrar, seleccionar y comprar los productos que esten buscando de una manera fácil y sencilla. ¡Además de ofrecer las mejores promociones!
                </p>
            </div>
            <div className='equipo'>
                <h2>
                    Nuestro Equipo:
                </h2>
            </div>
            <Board />
        </div>

    )
}

export default About_us