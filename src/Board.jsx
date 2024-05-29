import './Board.css'
import Card from './Card_perfil'
import Avatar from './assets/images/Avatar.jpg'
import Roberto from './assets/images/Roberto.jpg'
import Lecaros from './assets/images/Lecaros.jpg'

export default function Board(){
    return(
        <div className="board">
            <div className="board-row">
                <Card imageUrl={Roberto} altText={"Roberto"} description={"Descripcion: Ingeniero industrial, cualquier billete"}/>
                <Card imageUrl={Avatar} altText={"Felipe"} description={"Hola soy Felipe, Ingeniero en computación"}/> 
                <Card imageUrl={Lecaros} altText={"Matías"} description={"Matias, estudioso y deportista"}/>
            </div>
        </div>
    )
}