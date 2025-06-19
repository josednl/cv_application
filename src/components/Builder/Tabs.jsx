import { useState } from 'react';
import '@/styles/Tabs.css';
import PersonalInfo from './PersonalInfo.jsx';

export default function Tabs() {
	const [activeIndex, setActiveIndex] = useState(0);

	const tabs = [{ label: 'Personal Info', content: <PersonalInfo /> }];

	return (
		<div className='tabs-container'>
			<div className='tabs-header'>
				{tabs.map((tab, index) => (
					<button
						key={index}
						className={`tab-button ${index === activeIndex ? 'active' : ''}`}
						onClick={() => setActiveIndex(index)}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div className='tabs-content'>{tabs[activeIndex]?.content}</div>
		</div>
	);
}
