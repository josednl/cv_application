import Input from '@/components/Builder/InputGroup.jsx';
import WorkIcon from '@/assets/work.svg';

export default function PracticalExperience() {

    return(
        <div className='section-content'>
            <div className='section-title'>
                <img src={WorkIcon} alt='School icon' />
                <h1>Practical Experience</h1>
            </div>
            <form className='section-content-form'>
                <Input label='Company Name' id={'company-name-' + crypto.randomUUID()} required={true} placeholder='Name of the company you worked for' />
                <Input label='Position Title' id={'position-title-' + crypto.randomUUID()} required={true} placeholder='Position or role you held at that company' />
                <Input label='Start Date' id={'job-start-' + crypto.randomUUID()} required={true} type='date' block={false} />
                <Input label='End Date' id={'job-end-' + crypto.randomUUID()} optional={true} placeholder='Enter a date or `Present`' block={false} alignment='right' />
                <Input label='Location' id={'job-location-' + crypto.randomUUID()} optional={true} placeholder='Where is the headquarters you were going to?' />
                <Input label='Description' id={'job-desc-' + crypto.randomUUID()} textarea={true} recommended={true} optional={true} placeholder='Describe your main responsibilities of your jobs or achievements' /> 
            </form>
        </div>
    )
}