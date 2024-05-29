export default function CardButton({onClick, showImage}){
    return(
        <div>
            <button onClick={onClick}>
                {showImage ? "Ver info" : "Ver foto"}
            </button>
        </div>
    )
}