import { useState } from 'react';
import '@/styles/Accordion.css';

export default function Accordion({ title, contentStyle, children }) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleAccordion = () => setIsOpen((prev) => !prev)

	return (
		<div className='accordion'>
			<button className='accordion-header' onClick={toggleAccordion}>
				{title}
				<span className='arrow'>{isOpen ? '▲' : '▼'}</span>
			</button>
			{isOpen && <div className='accordion-content' style={contentStyle}>{children}</div>}
		</div>
	)
}
