export default function Button({ text = '', handleClick = () => {}, type = 'primary', size = 'mid' }) {
    const buttonStyles = {
        backgroundColor: (type === 'primary' ? '#007bff' : type === 'warning' ? '#ffc107' : type === 'danger' ? '#dc3545' : type === 'success' ? '#28a745' : '#007bff'),
        color: (type === 'warning' ? '#000000' : '#ffffff'),
        border: 'none',
        borderRadius: '.25rem',
        whiteSpace: 'nowrap',
        padding: (size === 'small' ? '3px 5px' : '.375rem .75rem'),
        fontSize: (size === 'mid' ? '1rem' : size === 'small' ? '11px' : '1rem'),
        lineHeight: '1.5',
        cursor: 'pointer',
    }

    return (
        <button type="button" style={buttonStyles} onClick={handleClick}>{text}</button>
    )
}