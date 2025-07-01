import React, { forwardRef } from 'react';
import '@/styles/PersonalInfoSection.css';
import MailIcon from '@/assets/mail.svg';
import PhoneIcon from '@/assets/phone.svg';
import LocationIcon from '@/assets/location.svg';

const iconMap = [
	{ key: 'email', icon: MailIcon, className: 'data-email' },
	{ key: 'phone', icon: PhoneIcon, className: 'data-phone' },
	{ key: 'location', icon: LocationIcon, className: 'data-location' },
];

const PersonalInfoSection = forwardRef(({ data, styles = {} }, ref) => {
	const parentStyles = {
		backgroundColor: styles.color,
		...(styles.alignment === 'top' ? { gridRow: '1 / 2' } :
		styles.alignment === 'right' ? { gridColumn: '2 / 3', gridRow: '1' } :
		styles.alignment === 'bottom' ? { gridRow: '2 / 3' } :
		styles.alignment === 'left' ? { gridColumn: '1 / 2' } : {})
	};

	const childStyles = (styles.alignment === 'right' || styles.alignment === 'left')
		? { flexDirection: 'column', height: '100%', alignItems: 'flex-start', justifyContent: 'flex-start' }
		: {};

	return (
		<section ref={ref} className='personal-info-container' style={parentStyles}>
			<div className='main-box'>
				<p className='data-name' style={{ color: styles.textColor }}>{data.name}</p>
			</div>
			<div className='info-box' style={childStyles}>
				{iconMap.map(({ key, icon, className }) => (
					data[key] && (
						<div className='data-box' key={key}>
							<img src={icon} alt={`${key} icon`} />
							<p className={className} style={{ color: styles.textColor }}>{data[key]}</p>
						</div>
					)
				))}
			</div>
		</section>
	);
});

export default PersonalInfoSection;
