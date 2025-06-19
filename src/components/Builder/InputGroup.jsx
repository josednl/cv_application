export default function Input({ label = '', type = 'text', textarea = false, id = '', icon = '', recommended = false, optional = false, required = false, placeholder = '', block = true, customStyles = {}, ...rest }) {
    const defaultInputStyles = {
        width: (block ? '100%' : '50%'),
        padding: '10px',
        backgroundColor: '#dadada75',
        border: '1px solid #cccccc',
        borderRadius: '8px',
        fontSize: '1rem',
        marginBottom: '15px',
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

    return(
        <div className='input-group'>
            <div style={headerStyle}>
                {icon && <img src={icon} alt={`${label} icon`} />} 
                <label style={labelStyles} htmlFor={id}>{label}</label> 
                {recommended && <span style={recommendedStyles}>recommended</span>}
                {optional && <span style={optionalStyles}>optional</span>}
            </div>
            {textarea ? (
                <textarea id={id} placeholder={placeholder} style={{...defaultInputStyles, ...defaultTextareaStyles, ...customStyles}} required={required} {...rest}></textarea>
            ) : (
                <input type={type} id={id} style={{...defaultInputStyles, ...customStyles}} required={required} placeholder={placeholder} {...rest} />
            )}
        </div>
    )
}