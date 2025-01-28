const TextFormatter = ({ color = 'orange' , text = 'standard text' }) => {
    return (
        <div>
            <p style={{color}}>{text.toUpperCase()}</p>
        </div>
    )
}


export default TextFormatter