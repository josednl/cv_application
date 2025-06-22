import '@/styles/EducationalExperienceSection.css';

export default function EducationalExperienceSection({ educationData }) {

    const styleSection = {
        display: (educationData.length === 0 ? 'none' : 'block'),
    }

    return(
        <section className="education-info-container" style={styleSection}>
            <div className="education-title">
                <h1>EDUCATION</h1>
            </div>
            <div className="education-content">
                {educationData.map((degree) => (
                    <div key={degree.id} className="degree-box">
                        <div className="degree-header">
                            <p className='degree-dates'>{degree.startDate} | {degree.endDate === '' ? 'Present' : degree.endDate}</p>
                            <p className='degree.location'>{degree.location}</p>
                        </div>
                        <div className="degree-content">
                            <div>
                                <p className='degree-title'>{degree.degree}</p>
                                <p className='degree-school'>{degree.school}</p>
                            </div>
                            <div className="degree-desc-box">
                                <p className='degree-desc'>{degree.description}</p>
                            </div>
                        </div>
                    </div>  
                ))}
            </div>
        </section>
    )
}