import './Board.css'
import Card from './Card_perfil'

export default function Board(){
    return(
        <div className="board">
            <div className="board-row">
                <Card/>
                <Card/> 
                <Card/>
            </div>
        </div>
    )
}