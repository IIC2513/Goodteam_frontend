import './Board.css'
import React from 'react'
import Card from './Card_perfil'
import Roberto from '../../assets/images/Roberto.jpg'
import Lecaros from '../../assets/images/Lecaros.jpg'
import Felipe from '../../assets/images/Felipe.jpg'

export default function Board(){
    return(
        <div className="board">
            <div className="board-row">
                <Card imageUrl={Roberto} altText={"Roberto"} description={"¡Hola! Mi nombre es Roberto Cumsille, un entusiasta del conocimiento y amante del deporte, y como no, de una buena cerveza. Ingeniero civil industrial con especialidad en TI, actualmente estudiando en la Universidad Católica."}/>
                <Card imageUrl={Felipe} altText={"Felipe"} description={"Hola, Soy Felipe tengo 22 años y soy un amante de los videojuegos y lo relacionado al mundo de la computación. Mi principal meta es crecer constantemente y mejorar día a día. Algunos de mis hobbies son jugar videojuegos, ir al gimnasio o compartir con la familia. Actualmente estudio Ingeniería de Software en la Universidad Católica y me motiva poder contribuir con mis conocimientos a este proyecto."}/> 
                <Card imageUrl={Lecaros} altText={"Matías"} description={"¡Hola! Soy Matías, un entusiasta del conocimiento y amante del deporte. Con una pasión por aprender y crecer constantemente, me esfuerzo por enfrentar nuevos desafíos y superar mis límites. Fuera de mi trabajo, me encanta mantenerme activo, ya sea jugando fútbol o explorando nuevas rutas de senderismo. Estoy emocionado de poder compartir mis habilidades y contribuir al equipo de manera significativa."}/>
            </div>
        </div>
    )
}