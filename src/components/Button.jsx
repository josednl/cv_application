export default function Button({ text = '', handleClick = () => {}, type = 'primary' }) {
    const boxStyles = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '10px',
    }

    const buttonStyles = {
        backgroundColor: (type === 'primary' ? '#007bff' : type === 'warning' ? '#ffc107' : type === 'danger' ? '#dc3545' : type === 'success' ? '#28a745' : '#007bff'),
        color: '#ffffff',
        border: 'none',
        borderRadius: '.25rem',
        whiteSpace: 'nowrap',
        padding: '.375rem .75rem',
        fontSize: '1rem',
        lineHeight: '1.5',
        cursor: 'pointer',
    }

    return (
        <div className="button-box" style={boxStyles}>
            <button type="button" style={buttonStyles} onClick={handleClick}>{text}</button>
        </div>
    )
}