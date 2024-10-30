const Button = (props) => {
    return <button
                onClick={() => alert(`A label desse botão é: ${props.label}`)}>
                {props.click}
            </button>
}

export default Button