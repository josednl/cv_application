import '@/styles/ContentSection.css';

export default function PracticalExperienceSection({ data }) {

    const styleSection = {
        display: (data.length === 0 ? 'none' : 'block'),
    }

    return(
        <section className="info-section-container" style={styleSection}>
            <div className="info-section-title">
                <h1>Professional Experience</h1>
            </div>
            <div className="info-section-content">
                {data.map((job) => (
                    <div key={job.id} className="content-box">
                        <div className="content-header">
                            <p>{job.startDate} | {job.endDate === '' ? 'Present' : job.endDate}</p>
                            <p>{job.location}</p>
                        </div>
                        <div className="content-body">
                            <div>
                                <p className='content-title'>{job.company}</p>
                                <p className='content-inst'>{job.job}</p>
                            </div>
                            <div className="content-desc-box">
                                <p className='content-desc'>{job.description}</p>
                            </div>
                        </div>
                    </div>  
                ))}
            </div>
        </section>
    )
}
