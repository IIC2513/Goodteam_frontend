import './About_us.css'
import Board from './Board.jsx'

function About_us() {
    return (
        <div className='content'>
            <h1>About us</h1>
            <div className='intro'>
                <p>Somos una empresa comprometida con...</p>
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