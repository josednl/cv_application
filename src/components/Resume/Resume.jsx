import PersonalInfoSection from '@/components/Resume/PersonalInfoSection.jsx';

export default function Resume({ personalData }) {

	return (
		<div style={{width: '100%', border: '1px solid black'}}>
            <PersonalInfoSection personalData={personalData}/>
		</div>
	);
}