import { useState } from 'react';
import '@/styles/Tabs.css';

export default function Tabs(props) {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className='tabs-container'>
			<div className='tabs-header'>
				{props.tabs.map((tab, index) => (
					<button
						key={index}
						className={`tab-button ${index === activeIndex ? 'active' : ''}`}
						onClick={() => setActiveIndex(index)}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div className='tabs-content'>{props.tabs[activeIndex]?.content}</div>
		</div>
	);
}
