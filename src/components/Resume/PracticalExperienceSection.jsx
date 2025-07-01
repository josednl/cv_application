import ExperienceSection from '@/components/ExperienceSection.jsx';

export default function PracticalExperienceSection(props, ref) {
	return (
		<ExperienceSection
			ref={ref}
			title='Professional Experience'
			data={props.data}
			getHeader={(d) => d.company}
			getBody={(d) => d.job}
		/>
	);
}
