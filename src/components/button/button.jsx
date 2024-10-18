const showDownloadMessage = (label) => {
    alert(`A label desse botão é ${label}`)
}


const Button = (props) => {
    return (
        <>
            <button
                onClick={() => showDownloadMessage(props.label)}>
                {props.click}
            </button>
        </>
    )
}

export default Button