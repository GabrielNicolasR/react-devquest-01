import '../TextComponents/UppercaseText.css'

const TextFormatter = (textColor) => {
    return (
        <div>
            <p
                className="uppercase"
                style={textColor}>
                This is a colorful text
            </p>
        </div>
    )
}


export default TextFormatter