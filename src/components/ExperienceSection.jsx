import React, { forwardRef } from 'react';
import '@/styles/ContentSection.css';

const ExperienceSection = forwardRef(({ data = [], title, getHeader, getBody }, ref) => {
	if (!data.length) return null;

	return (
		<section ref={ref} className='info-section-container'>
			<div className='info-section-title'>
				<h1>{title}</h1>
			</div>
			<div className='info-section-content'>
				{data.map((item) => (
					<div key={item.id} className='content-box'>
						<div className='content-header'>
							<p>
								<span style={{ whiteSpace: 'nowrap' }}>{item.startDate}</span> |{' '}
								<span style={{ whiteSpace: 'nowrap' }}>{item.endDate || 'Present'}</span>
							</p>
							<p>{item.location}</p>
						</div>
						<div className='content-body'>
							<div>
								<p className='content-title'>{getHeader(item)}</p>
								<p className='content-inst'>{getBody(item)}</p>
							</div>
							<div className='content-desc-box'>
								<p className='content-desc'>{item.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
});

export default ExperienceSection;
