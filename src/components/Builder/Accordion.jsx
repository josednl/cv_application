import { useState, useCallback } from 'react';
import '@/styles/Accordion.css';

export default function Accordion({ title, contentStyle = {}, children }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = useCallback(() => {
		setIsOpen(prev => !prev);
	}, []);

	return (
		<div className='accordion'>
			<button
				className='accordion-header'
				onClick={toggleAccordion}
				aria-expanded={isOpen}
				aria-controls='accordion-content'
			>
				{title}
				<span className='arrow'>{isOpen ? '▲' : '▼'}</span>
			</button>
			
			{isOpen && (
				<div
					id='accordion-content'
					className='accordion-content'
					style={contentStyle}
				>
					{children}
				</div>
			)}
		</div>
	);
}
