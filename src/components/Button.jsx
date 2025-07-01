export default function Button({
    text = '',
    handleClick = () => {},
    type = 'primary',
    size = 'mid',
    icon = ''
}) {
    const backgroundColors = {
        primary: '#007bff',
        warning: '#ffc107',
        danger: '#dc3545',
        success: '#28a745',
        secondary: '#6c757d'
    };

    const fontColors = {
        warning: '#000000',
        default: '#ffffff'
    };

    const paddingSizes = {
        small: '3px 5px',
        mid: '.375rem .75rem'
    };

    const fontSizes = {
        small: '11px',
        mid: '1rem'
    };

    const buttonStyles = {
        backgroundColor: backgroundColors[type] || backgroundColors.primary,
        color: type === 'warning' ? fontColors.warning : fontColors.default,
        border: 'none',
        borderRadius: '.25rem',
        whiteSpace: 'nowrap',
        padding: paddingSizes[size] || paddingSizes.mid,
        fontSize: fontSizes[size] || fontSizes.mid,
        lineHeight: '1.5',
        cursor: 'pointer',
        ...(icon && {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px'
        })
    };

    return (
        <button type='button' style={buttonStyles} onClick={handleClick}>
            {icon && <img src={icon} alt='' />} {text}
        </button>
    );
}
