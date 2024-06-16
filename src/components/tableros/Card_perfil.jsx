import './Card_perfil.css'
import React, { useState } from 'react';
import CardButton from './Card_boton'

export default function Card({ imageUrl, altText, description}){
    const [showImage, setShowImage] = useState(true);
    
    const toggleImage =() => {
        setShowImage(!showImage);
    }


    return(
        <div className='card'>
            <div>
                {!showImage && (<p className='description'>{description}</p>)}
            </div>
            <div className='card-container'>
            {showImage && <img src={imageUrl} alt={altText} className='card-img' />}
                <h2>{altText}</h2>
                <CardButton onClick={toggleImage} showImage={showImage} />
            </div>
        </div>
    )
}