import { useState } from 'react';
import Input from '@/components/Builder/InputGroup.jsx';
import Button from '@/components/Button.jsx';
import SchoolIcon from '@/assets/school.svg';

export default function EducationalExperience({ educationalDataSetter }) {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleClick() {
        const newEntry = {
            id: crypto.randomUUID(),
            ...formData,
        };

        educationalDataSetter(prev => [...prev, newEntry]);

        setFormData({
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
            description: '',
        });
    }

    return(
        <div className='section-content'>
            <div className='section-title'>
                <img src={SchoolIcon} alt='School icon' />
                <h1>Educational Experience</h1>
            </div>
            <form className='section-content-form'>
                <Input label='School' name='school' placeholder='School/University/Institution' required={true} value={formData.school} onChange={handleChange} />
                <Input label='Degree' name='degree' placeholder='Degree/Field of study' required={true} value={formData.degree} onChange={handleChange} />
                <Input label='Start Date' name='startDate' required={true} type='date' value={formData.startDate} onChange={handleChange} />
                <Input label='End Date' name='endDate' placeholder='Enter a date or `Present`' optional={true} value={formData.endDate} onChange={handleChange} />
                <Input label='Location' name='location' placeholder='Location from which you did your studies' optional={true} value={formData.location} onChange={handleChange} />
                <Input label='Description' name='description' textarea={true} placeholder='Describe your studies or achievements' optional={true} value={formData.description} onChange={handleChange} /> 
            </form>
            <Button text='Add' handleClick={handleClick}/>
        </div>
    )
}