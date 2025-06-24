import { useState } from 'react';
import '@/styles/Tabs.css';
import PersonalInfo from '@/components/Builder/PersonalInfo.jsx';
import EducationalExperience from '@/components/Builder/EducationalExperience.jsx';
import PracticalExperience from '@/components/Builder/PracticalExperience.jsx';

export default function Tabs({ handleDataChange, personalData, personalDataSetter, educationData, educationalDataSetter }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const tabs = [
		{ label: 'Personal Information', content: <PersonalInfo handleDataChange={(e) => handleDataChange(e, personalDataSetter)} data={personalData} /> },
		{ label: 'Education', content: <EducationalExperience educationalDataSetter={educationalDataSetter} data={educationData} /> },
		{ label: 'Experience', content: <PracticalExperience /> },
	];

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
