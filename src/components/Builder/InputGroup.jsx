export default function Input({ label = '', id = '', type = 'text', textarea = false, name = '', icon = '', value = '', recommended = false, optional = false, required = false, placeholder = '', customStyles = {}, onChange = () => {}, ...rest }) {

    const defaultInputStyles = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#dadada75',
        border: '1px solid #cccccc',
        borderRadius: '8px',
        fontSize: '1rem',
    }

    const labelStyles = {
        fontWeight: '700',
    }

    const headerStyle = {
        display: 'flex',
        gap: '5px',
        alignItems: 'center',
        marginBottom: '8px',
    }

    const recommendedStyles = {
        display: 'inline-block',
        padding: '2px 6px',
        fontSize: '12px',
        fontStyle: 'italic',
        color: '#ffffff',
        backgroundColor: '#3b82f6',
        borderRadius: '9999px',
        whiteSpace: 'nowrap',
    }

    const defaultTextareaStyles = {
        resize: 'none',
        height: '100px',
    }

    const optionalStyles = {
        display: 'inline-block',
        padding: '2px 6px',
        fontSize: '12px',
        fontStyle: 'italic',
        color: '#000000',
        backgroundColor: '#f0b630',
        borderRadius: '9999px',
        whiteSpace: 'nowrap',
    }

    const inlineGroupStyles = {
        width: '100%',
    }

    return (
        <div className='input-group' style={inlineGroupStyles}>
            <div style={headerStyle}>
                {icon && <img src={icon} alt={`${label} icon`} />}
                <label style={labelStyles} htmlFor={id}>{label}</label>
                {recommended && <span style={recommendedStyles}>recommended</span>}
                {optional && <span style={optionalStyles}>optional</span>}
            </div>
            {textarea ? (
                <textarea id={id} name={name} value={value} style={{ ...defaultInputStyles, ...defaultTextareaStyles, ...customStyles }} required={required} placeholder={placeholder} onChange={onChange} {...rest}></textarea>
            ) : (
                <input id={id} type={type} name={name} value={value} style={{ ...defaultInputStyles, ...customStyles }} required={required} placeholder={placeholder} onChange={onChange} {...rest} />
            )}
        </div>
    )
}