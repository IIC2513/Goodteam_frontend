import './Card_perfil.css'

export default function Card({ imageUrl, altText }){
    return(
        <div className='card'>
            <div className='card-container'>
                <img src={imageUrl} alt={altText} className='card-img'/>
                <h2>
                    {altText}
                </h2>
                <button className='button'>
                    Ver info
                </button>
            </div>
        </div>
    )
}