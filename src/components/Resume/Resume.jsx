import PersonalInfoSection from '@/components/Resume/PersonalInfoSection.jsx';
import EducationalExperienceSection from '@/components/Resume/EducationalExperienceSection.jsx';

export default function Resume({ personalData, educationData }) {

	return (
		<div style={{width: '100%', border: '1px solid black'}}>
            <PersonalInfoSection personalData={personalData}/>
			<EducationalExperienceSection educationData={educationData} />
		</div>
	);
}