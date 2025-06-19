export default function Link({handleClick = '', text, icon = ''}) {
    const linkStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '3px',
        color: '#424242',
        textDecoration: 'underline #424242',
        padding: '5px',
        cursor: 'pointer',
    }

    return (
        <a style={linkStyles} onclick={handleClick}>
            {icon  && <img src={icon} alt={`${text} icon`} />} 
            {text}
        </a>
    )
}