import { useState } from 'react';
import Accordion from '@/components/Builder/Accordion.jsx';
import Button from '@/components/Button.jsx';
import Input from '@/components/Builder/InputGroup.jsx';
import '@/styles/ItemsList.css';
import WorkIcon from '@/assets/work.svg';

export default function PracticalExperience({ handleArrayDataChange, setter, data }) {
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        company: '',
        job: '',
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
            company: '',
            job: '',
            startDate: '',
            endDate: '',
            location: '',
            description: '',
        });
        setEditingId(null);
    }

    function handleModifyBtn(data) {
        setFormData({
            company: data.company,
            job: data.job,
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
            company: '',
            job: '',
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
                    <img src={WorkIcon} alt='School icon' />
                    <h1>Practical Experience</h1>
                </div>
                <form className='section-content-form'>
                    <Input id='company-name-input' name='company' label='Company Name' required={true} placeholder='Name of the company you worked for' value={formData.company} onChange={handleChange} />
                    <Input id='job-title-input' name='job' label='Position Title' required={true} placeholder='Position or role you held at that company' value={formData.job} onChange={handleChange} />
                    <div style={{display: 'flex', justifyContent: 'space-between', gap: '10px'}}>
                        <Input id='job-start-input' name='startDate' label='Start Date' required={true} type='date' value={formData.startDate} onChange={handleChange} />
                        <Input id='job-end-input' name='endDate' label='End Date' optional={true} type='date' value={formData.endDate} onChange={handleChange} />
                    </div>
                    <Input id='job-location-input' name='location' label='Location' optional={true} placeholder='Where is the headquarters you were going to?' value={formData.location} onChange={handleChange} />
                    <Input id='job-desc-input' name='description' label='Description' textarea={true} recommended={true} optional={true} placeholder='Describe your main responsibilities of your jobs or achievements' value={formData.description} onChange={handleChange} /> 
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
            <Accordion title='Jobs lists' contentStyle={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {data.map((job) => (
                    <div key={job.id} className='list-item'>
                        <div className="list-item-content">
                            <div>
                                <p><span style={{whiteSpace: 'nowrap'}}>{job.startDate}</span> | <span style={{whiteSpace: 'nowrap'}}>{job.endDate === '' ? 'Present' : job.endDate}</span></p>
                            </div>
                            <div>
                                <p className='item-title'>{job.company}</p>
                                <p>{job.job}</p>
                            </div>
                        </div>
                        <div className='list-options'>
                            <Button text='Modify' type='warning' handleClick={() => {handleModifyBtn(job)}} size='small' />
                            <Button text='Remove' type='danger' handleClick={() => handleRemoveBtn(job.id)} size='small' />
                        </div>
                    </div>
                ))}
            </Accordion> 
        </>
    )
}