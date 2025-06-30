import React, { forwardRef } from 'react';
import '@/styles/ContentSection.css';

const EducationalExperienceSection = forwardRef(({ data }, ref) => {

    const styleSection = {
        display: (data.length === 0 ? 'none' : 'block'),
    }

    return(
        <section ref={ref} className='info-section-container' style={styleSection}>
            <div className='info-section-title'>
                <h1>Education</h1>
            </div>
            <div className='info-section-content'>
                {data.map((degree) => (
                    <div key={degree.id} className='content-box'>
                        <div className='content-header'>
                            <p><span style={{whiteSpace: 'nowrap'}}>{degree.startDate}</span> | <span style={{whiteSpace: 'nowrap'}}>{degree.endDate === '' ? 'Present' : degree.endDate}</span></p>
                            <p>{degree.location}</p>
                        </div>
                        <div className='content-body'>
                            <div>
                                <p className='content-title'>{degree.degree}</p>
                                <p className='content-inst'>{degree.school}</p>
                            </div>
                            <div className='content-desc-box'>
                                <p className='content-desc'>{degree.description}</p>
                            </div>
                        </div>
                    </div>  
                ))}
            </div>
        </section>
    )
})

export default EducationalExperienceSection;
