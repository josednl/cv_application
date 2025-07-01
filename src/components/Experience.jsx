import { useState } from 'react';
import Input from '@/components/InputGroup.jsx';
import Accordion from '@/components/Builder/Accordion.jsx';
import Button from '@/components/Button.jsx';
import '@/styles/ItemsList.css';

export default function ExperienceSection({
    title,
    icon,
    formFields,
    listTitle,
    data,
    setter,
    handleArrayDataChange,
    itemLabels
}) {
    const [editingId, setEditingId] = useState(null);
    const initialFormState = formFields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {});
    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleClick = () => {
        const newEntry = {
            id: crypto.randomUUID(),
            ...formData,
        };

        const updated = editingId
            ? data.map((item) => (item.id === editingId ? newEntry : item))
            : [...data, newEntry];

        handleArrayDataChange(updated, setter);
        setFormData(initialFormState);
        setEditingId(null);
    };

    const handleModifyBtn = (item) => {
        setFormData(formFields.reduce((acc, field) => ({ ...acc, [field.name]: item[field.name] }), {}));
        setEditingId(item.id);
    };

    const handleRemoveBtn = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this entry?');
        if (!confirmDelete) return;

        const newData = data.filter((item) => item.id !== id);
        handleArrayDataChange(newData, setter);
        setFormData(initialFormState);
        setEditingId((prevId) => (prevId === id ? null : prevId));
    };

    const handleCancel = () => {
        setFormData(initialFormState);
        setEditingId(null);
    };

    return (
        <>
            <div className='section-content'>
                <div className='section-title'>
                    <img src={icon} alt={`${title} icon`} />
                    <h1>{title}</h1>
                </div>
                <form className='section-content-form'>
                    {formFields.map((field) => (
                        <Input
                            key={field.name}
                            id={`${field.name}-input`}
                            label={field.label}
                            name={field.name}
                            type={field.type || 'text'}
                            placeholder={field.placeholder}
                            required={field.required}
                            optional={field.optional}
                            textarea={field.textarea}
                            value={formData[field.name]}
                            onChange={handleChange}
                        />
                    ))}
                </form>
                <div className='add-button-container'>
                    {editingId ? (
                        <>
                            <Button 
                                text='Update' 
                                handleClick={handleClick} 
                            />
                            <Button 
                                text='Cancel' 
                                type='secondary' 
                                handleClick={handleCancel} 
                            />
                        </>
                    ) : (
                        <Button 
                            text='Add' 
                            handleClick={handleClick} 
                        />
                    )}
                </div>
            </div>
            <Accordion 
                title={listTitle} 
                contentStyle={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
                {data.map((item) => (
                    <div key={item.id} className='list-item'>
                        <div className='list-item-content'>
                            <div>
                                <p>
                                    <span style={{ whiteSpace: 'nowrap' }}>{item.startDate}</span> |{' '}
                                    <span style={{ whiteSpace: 'nowrap' }}>
                                        {item.endDate === '' ? 'Present' : item.endDate}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p className='item-title'>{item[itemLabels.title]}</p>
                                <p>{item[itemLabels.subtitle]}</p>
                            </div>
                        </div>
                        <div className='list-options'>
                            <Button 
                                text='Modify' 
                                type='warning' 
                                handleClick={() => handleModifyBtn(item)} 
                                size='small' 
                            />
                            <Button 
                                text='Remove' 
                                type='danger' 
                                handleClick={() => handleRemoveBtn(item.id)} 
                                size='small' 
                            />
                        </div>
                    </div>
                ))}
            </Accordion>
        </>
    );
}
