import './Board.css'
import Card from './Card_perfil'
import Avatar from '../../assets/images/Avatar.jpg'
import Roberto from '../../assets/images/Roberto.jpg'
import Lecaros from '../../assets/images/Lecaros.jpg'

export default function Board(){
    return(
        <div className="board">
            <div className="board-row">
                <Card imageUrl={Roberto} altText={"Roberto"} description={"¡Hola! Mi nombre es Roberto Cumsille, un entusiasta del conocimiento y amante del deporte, y como no, de una buena cerveza. Ingeniero civil industrial con especialidad en TI, actualmente estudiando en la Universidad Católica."}/>
                <Card imageUrl={Avatar} altText={"Felipe"} description={"Hola soy Felipe, Ingeniero en computación"}/> 
                <Card imageUrl={Lecaros} altText={"Matías"} description={"¡Hola! Soy Matías, un entusiasta del conocimiento y amante del deporte. Con una pasión por aprender y crecer constantemente, me esfuerzo por enfrentar nuevos desafíos y superar mis límites. Fuera de mi trabajo, me encanta mantenerme activo, ya sea jugando fútbol o explorando nuevas rutas de senderismo. Estoy emocionado de poder compartir mis habilidades y contribuir al equipo de manera significativa."}/>
            </div>
        </div>
    )
}