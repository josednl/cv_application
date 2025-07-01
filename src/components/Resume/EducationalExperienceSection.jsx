import ExperienceSection from '@/components/ExperienceSection.jsx';

export default function EducationalExperienceSection(props, ref) {
	return (
		<ExperienceSection
			ref={ref}
			title='Education'
			data={props.data}
			getHeader={(d) => d.degree}
			getBody={(d) => d.school}
		/>
	);
}
