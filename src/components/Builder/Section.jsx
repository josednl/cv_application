import { useState } from 'react';
import '@/styles/Section.css';

export default function Section({ title, children }) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleAccordion = () => setIsOpen((prev) => !prev)

	return (
		<div className='accordion'>
			<button className='accordion-header' onClick={toggleAccordion}>
				{title}
				<span className='arrow'>{isOpen ? '▲' : '▼'}</span>
			</button>
			{isOpen && <div className='accordion-content'>{children}</div>}
		</div>
	)
}
