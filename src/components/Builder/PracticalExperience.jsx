import ExperienceSection from '@/components/Experience.jsx';
import WorkIcon from '@/assets/work.svg';

export default function PracticalExperience({ handleArrayDataChange, setter, data }) {

    return(
        <ExperienceSection
            title='Practical Experience'
            icon={WorkIcon}
            formFields={[
                { name: 'company', label: 'Company Name', required: true, placeholder: 'Name of the company' },
                { name: 'job', label: 'Position Title', required: true, placeholder: 'Job title' },
                { name: 'startDate', label: 'Start Date', required: true, type: 'date' },
                { name: 'endDate', label: 'End Date', optional: true, type: 'date' },
                { name: 'location', label: 'Location', optional: true, placeholder: 'Company HQ location' },
                { name: 'description', label: 'Description', textarea: true, optional: true, placeholder: 'Responsibilities or achievements' },
            ]}
            itemLabels={{ title: 'company', subtitle: 'job' }}
            listTitle='Jobs list'
            data={data}
            setter={setter}
            handleArrayDataChange={handleArrayDataChange}
        />     
    )
}
