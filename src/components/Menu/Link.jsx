const linkStyles = {
	display: 'flex',
	alignItems: 'center',
	gap: '3px',
	color: '#424242',
	textDecoration: 'underline',
	padding: '5px',
	cursor: 'pointer',
	background: 'none',
	border: 'none',
	font: 'inherit',
};

export default function Link({ handleClick = () => {}, text, icon = '' }) {
	return (
		<button style={linkStyles} onClick={handleClick}>
			{icon && <img src={icon} alt={`${text} icon`} />}
			{text}
		</button>
	);
}
