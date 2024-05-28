import './Board.css'
import Card from './Card_perfil'
import Avatar from './assets/images/Avatar.jpg'
import Roberto from './assets/images/Roberto.jpg'

export default function Board(){
    return(
        <div className="board">
            <div className="board-row">
                <Card imageUrl={Roberto} altText={"Roberto"}/>
                <Card imageUrl={Avatar} altText={"Felipe"}/> 
                <Card imageUrl={Avatar} altText={"Matías"}/>
            </div>
        </div>
    )
}