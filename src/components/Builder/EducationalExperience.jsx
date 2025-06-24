import { useState } from 'react';
import Input from '@/components/Builder/InputGroup.jsx';
import Section from '@/components/Builder/Section.jsx';
import '@/styles/EducationalExperience.css';
import Button from '@/components/Button.jsx';
import SchoolIcon from '@/assets/school.svg';

export default function EducationalExperience({ educationalDataSetter, data }) {
    const [editingId, setEditingId] = useState(null);
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

        if (editingId) {
            educationalDataSetter(prev =>
                prev.map(item => (item.id === editingId ? newEntry : item))
            );
        } else {
            educationalDataSetter(prev => [...prev, newEntry]);
        }

        setFormData({
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
            description: '',
        });
        setEditingId(null);
    }

    function handleModifyBtn(data) {
        setFormData({
            school: data.school,
            degree: data.degree,
            startDate: data.startDate,
            endDate: data.endDate,
            location: data.location,
            description: data.description,
        });
        setEditingId(data.id);
    }

    function handleRemoveBtn(id) {
        const confirmDelete = window.confirm('Are you sure you want to delete this entry?');
        if (!confirmDelete) return;

        educationalDataSetter(prev => prev.filter(item => item.id !== id));

        setEditingId(prevId => (prevId === id ? null : prevId));
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
        <>
            <div className='section-content'>
                <div className='section-title'>
                    <img src={SchoolIcon} alt='School icon' />
                    <h1>Educational Experience</h1>
                </div>
                <form className='section-content-form'>
                    <Input label='School' name='school' placeholder='School/University/Institution' required={true} value={formData.school} onChange={handleChange} />
                    <Input label='Degree' name='degree' placeholder='Degree/Field of study' required={true} value={formData.degree} onChange={handleChange} />
                    <Input label='Start Date' name='startDate' required={true} type='date' value={formData.startDate} onChange={handleChange} />
                    <Input label='End Date' name='endDate' optional={true} type='date' value={formData.endDate} onChange={handleChange} />
                    <Input label='Location' name='location' placeholder='Location from which you did your studies' optional={true} value={formData.location} onChange={handleChange} />
                    <Input label='Description' name='description' textarea={true} placeholder='Describe your studies or achievements' optional={true} value={formData.description} onChange={handleChange} /> 
                </form>
                <div className='add-button-container'>
                    <Button text={editingId ? 'Update' : 'Add'} handleClick={handleClick}/>
                </div>
            </div>
            <Section title='Degrees lists' contentStyle={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {data.map((degree) => (
                    <div key={degree.id}>
                        <div className="degree-item">
                            <div className="degree-left">
                                <p className='degree-dates'>{degree.startDate} | {degree.endDate === '' ? 'Present' : degree.endDate}</p>
                            </div>
                            <div className="degree-right">
                                <div>
                                    <p className='degree-title'>{degree.degree}</p>
                                    <p className='degree-school'>{degree.school}</p>
                                </div>
                            </div>
                        </div>
                        <div className='degree-options'>
                            <Button text='Modify' type='warning' handleClick={() => {handleModifyBtn(degree)}} size='small' />
                            <Button text='Remove' type='danger' handleClick={() => handleRemoveBtn(degree.id)} size='small' />
                        </div>
                    </div>
                ))}
            </Section>
        </>
    )
}
