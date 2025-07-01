import ExperienceSection from '@/components/Experience.jsx';
import SchoolIcon from '@/assets/school.svg';

export default function EducationalExperience({  handleArrayDataChange, setter, data }) {

    return(
        <ExperienceSection
            title='Educational Experience'
            icon={SchoolIcon}
            formFields={[
                { name: 'school', label: 'School', required: true, placeholder: 'School/University/Institution' },
                { name: 'degree', label: 'Degree', required: true, placeholder: 'Degree/Field of study' },
                { name: 'startDate', label: 'Start Date', required: true, type: 'date' },
                { name: 'endDate', label: 'End Date', optional: true, type: 'date' },
                { name: 'location', label: 'Location', optional: true, placeholder: 'Location of studies' },
                { name: 'description', label: 'Description', textarea: true, optional: true, placeholder: 'Achievements or notes' },
            ]}
            itemLabels={{ title: 'degree', subtitle: 'school' }}
            listTitle='Degrees list'
            data={data}
            setter={setter}
            handleArrayDataChange={handleArrayDataChange}
        />
    )
}
