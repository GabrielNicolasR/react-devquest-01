import '../components/UppercaseText.css'

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

TextFormatter.defaultProps = {
    color: 'orange'
}


export default TextFormatter