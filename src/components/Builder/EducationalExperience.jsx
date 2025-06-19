import Input from '@/components/Builder/InputGroup.jsx';
import SchoolIcon from '@/assets/school.svg';

export default function EducationalExperience() {
    return(
        <div className='section-content'>
            <div className='section-title'>
                <img src={SchoolIcon} alt='School icon' />
                <h1>Educational Experience</h1>
            </div>
            <form className='section-content-form'>
                <Input label='School' id={'degree-school-' + crypto.randomUUID()} placeholder='School/University/Institution' required={true} />
                <Input label='Degree' id={'degree-' + crypto.randomUUID()} placeholder='Degree/Field of study' required={true} />
                <Input label='Start Date' id={'degree-school-start-' + crypto.randomUUID()} required={true} type='date' />
                <Input label='End Date' id={'degree-school-end-' + crypto.randomUUID()} optional={true} placeholder='Enter a date or `Present`' />
                <Input label='Description' id={'degree-desc-' + crypto.randomUUID()} textarea={true} optional={true} placeholder='Describe your studies or achievements' /> 
            </form>
        </div>
    )
}