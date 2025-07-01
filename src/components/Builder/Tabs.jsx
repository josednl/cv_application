import { useState, useMemo, useCallback } from 'react';
import '@/styles/Tabs.css';
import PersonalInfo from '@/components/Builder/PersonalInfo.jsx';
import EducationalExperience from '@/components/Builder/EducationalExperience.jsx';
import PracticalExperience from '@/components/Builder/PracticalExperience.jsx';

export default function Tabs({ 
	handleDataChange, 
	handleArrayDataChange, 
	personalData,
	personalDataSetter, 
	educationData, 
	educationalDataSetter, 
	practicalData, 
	practicalDataSetter 
}) {
	const [activeIndex, setActiveIndex] = useState(0);
	const handlePersonalChange = useCallback(
		e => handleDataChange(e, personalDataSetter),
		[handleDataChange, personalDataSetter]
	);

	const tabs = useMemo(() => [
		{
			label: 'Personal Information',
			content: (
				<PersonalInfo 
					handleDataChange={handlePersonalChange}
					data={personalData} 
				/>
			),
		},
		{
			label: 'Education',
			content: (
				<EducationalExperience 
					handleArrayDataChange={handleArrayDataChange} 
					setter={educationalDataSetter}
					data={educationData} 
				/>
			),
		},
		{
			label: 'Experience',
			content: (
				<PracticalExperience 
					handleArrayDataChange={handleArrayDataChange} 
					setter={practicalDataSetter}
					data={practicalData} 
				/>
			),
		},
	], [
		handlePersonalChange,
		handleArrayDataChange,
		personalData,
		educationData,
		practicalData,
		educationalDataSetter,
		practicalDataSetter,
	]);

	return (
		<div className='tabs-container'>
			<div className='tabs-header'>
				{tabs.map((tab, index) => (
					<button
						key={tab.label}
						className={`tab-button ${index === activeIndex ? 'active' : ''}`}
						onClick={() => setActiveIndex(index)}
					>
						{tab.label}
					</button>
				))}
			</div>
			<div className='tabs-content'>
				{tabs[activeIndex]?.content}
			</div>
		</div>
	);
}
