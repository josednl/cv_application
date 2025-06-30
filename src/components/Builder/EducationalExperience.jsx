import { useState } from 'react';
import Input from '@/components/Builder/InputGroup.jsx';
import Accordion from '@/components/Builder/Accordion.jsx';
import '@/styles/ItemsList.css';
import Button from '@/components/Button.jsx';
import SchoolIcon from '@/assets/school.svg';

export default function EducationalExperience({  handleArrayDataChange, setter, data }) {
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
            const updatedData = data.map(item => (item.id === editingId ? newEntry : item));
            handleArrayDataChange(updatedData, setter);
        } else {
            const newData = [...data, newEntry];
            handleArrayDataChange(newData, setter);
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

        const newData = data.filter(item => item.id !== id);
        handleArrayDataChange(newData, setter);

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

    function handleCancel() {
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

    return(
        <>
            <div className='section-content'>
                <div className='section-title'>
                    <img src={SchoolIcon} alt='School icon' />
                    <h1>Educational Experience</h1>
                </div>
                <form className='section-content-form'>
                    <Input id='school-input' label='School' name='school' placeholder='School/University/Institution' required={true} value={formData.school} onChange={handleChange} />
                    <Input id='degree-input' label='Degree' name='degree' placeholder='Degree/Field of study' required={true} value={formData.degree} onChange={handleChange} />
                    <Input id='degree-start-input' label='Start Date' name='startDate' required={true} type='date' value={formData.startDate} onChange={handleChange} />
                    <Input id='degree-end-input' label='End Date' name='endDate' optional={true} type='date' value={formData.endDate} onChange={handleChange} />
                    <Input id='degree-location-input' label='Location' name='location' placeholder='Location from which you did your studies' optional={true} value={formData.location} onChange={handleChange} />
                    <Input id='degree-desc-input' label='Description' name='description' textarea={true} placeholder='Describe your studies or achievements' optional={true} value={formData.description} onChange={handleChange} /> 
                </form>
                <div className='add-button-container'>
                    {editingId ? (
                        <>
                            <Button text='Update' handleClick={handleClick} />
                            <Button text='Cancel' type='secondary' handleClick={handleCancel} />
                        </>
                    ) : (
                        <Button text='Add' handleClick={handleClick} />
                    )}
                </div>
            </div>
            <Accordion title='Degrees lists' contentStyle={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {data.map((degree) => (
                    <div key={degree.id} className='list-item'>
                        <div className='list-item-content'>
                            <div>
                                <p><span style={{whiteSpace: 'nowrap'}}>{degree.startDate}</span> | <span style={{whiteSpace: 'nowrap'}}>{degree.endDate === '' ? 'Present' : degree.endDate}</span></p>
                            </div>
                            <div>
                                <p className='item-title'>{degree.degree}</p>
                                <p>{degree.school}</p>
                            </div>
                        </div>
                        <div className='list-options'>
                            <Button text='Modify' type='warning' handleClick={() => {handleModifyBtn(degree)}} size='small' />
                            <Button text='Remove' type='danger' handleClick={() => handleRemoveBtn(degree.id)} size='small' />
                        </div>
                    </div>
                ))}
            </Accordion>
        </>
    )
}
