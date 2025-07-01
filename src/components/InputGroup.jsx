const styles = {
    container: {
        width: '100%',
    },
    header: {
        display: 'flex',
        gap: '5px',
        alignItems: 'center',
        marginBottom: '8px',
    },
    label: {
        fontWeight: '700',
    },
    badge: {
        display: 'inline-block',
        padding: '2px 6px',
        fontSize: '12px',
        fontStyle: 'italic',
        borderRadius: '9999px',
        whiteSpace: 'nowrap',
    },
    recommended: {
        color: '#ffffff',
        backgroundColor: '#3b82f6',
    },
    optional: {
        color: '#000000',
        backgroundColor: '#f0b630',
    },
    input: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#dadada75',
        border: '1px solid #cccccc',
        borderRadius: '8px',
        fontSize: '1rem',
    },
    textarea: {
        resize: 'none',
        height: '100px',
    },
};

const Badge = ({ text, style }) => (
    <span style={{ ...styles.badge, ...style }}>{text}</span>
);

export default function Input({
    label = '',
    id = '',
    type = 'text',
    textarea = false,
    name = '',
    icon = '',
    value = '',
    recommended = false,
    optional = false,
    required = false,
    placeholder = '',
    customStyles = {},
    onChange = () => {},
    ...rest
}) {
    const commonProps = {
        id,
        name,
        value,
        required,
        placeholder,
        onChange,
        style: {
            ...styles.input,
            ...(textarea ? styles.textarea : {}),
            ...customStyles,
        },
        ...rest,
    };

    return (
        <div className='input-group' style={styles.container}>
            <div style={styles.header}>
                {icon && <img src={icon} alt={`${label} icon`} />}
                <label htmlFor={id} style={styles.label}>{label}</label>
                {recommended && <Badge text='recommended' style={styles.recommended} />}
                {optional && <Badge text='optional' style={styles.optional} />}
            </div>
            {textarea ? (
                <textarea {...commonProps} />
            ) : (
                <input type={type} {...commonProps} />
            )}
        </div>
    );
}
