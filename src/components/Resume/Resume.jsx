import PersonalInfoSection from '@/components/Resume/PersonalInfoSection.jsx';
import EducationalExperienceSection from '@/components/Resume/EducationalExperienceSection.jsx';
import PracticalExperienceSection from '@/components/Resume/PracticalExperienceSection.jsx';

export default function Resume({ personalData, educationData, practicalData }) {

	return (
		<div style={{width: '100%', border: '1px solid black'}}>
            <PersonalInfoSection data={personalData}/>
			<EducationalExperienceSection data={educationData} />
			<PracticalExperienceSection data={practicalData} />
		</div>
	);
}
