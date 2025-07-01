import PersonalInfoSection from '@/components/Resume/PersonalInfoSection.jsx';
import EducationalExperienceSection from '@/components/Resume/EducationalExperienceSection.jsx';
import PracticalExperienceSection from '@/components/Resume/PracticalExperienceSection.jsx';

function getGridLayout(alignment) {
	switch (alignment) {
		case 'top':
			return { gridTemplateRows: '1fr 5fr' };
		case 'right':
			return { gridTemplateColumns: '2fr 1fr' };
		case 'bottom':
			return { gridTemplateRows: '5fr 1fr' };
		case 'left':
			return { gridTemplateColumns: '1fr 2fr' };
		default:
			return {};
	}
}

export default function ResumeLayout({ personalData, educationData, practicalData, styles = {}, sectionRefs = {} }) {
	const layoutStyles = {
		width: '100%',
		display: 'grid',
		...getGridLayout(styles.alignment),
	};

	return (
		<div style={layoutStyles} className={`${styles.font}-font-family`}>
			<PersonalInfoSection ref={sectionRefs.personal} data={personalData} styles={styles} />
			<div>
				<EducationalExperienceSection ref={sectionRefs.education} data={educationData} />
				<PracticalExperienceSection ref={sectionRefs.experience} data={practicalData} />
			</div>
		</div>
	);
}
