import React, { forwardRef } from 'react';
import '@/styles/PersonalInfoSection.css';
import MailIcon from '@/assets/mail.svg';
import PhoneIcon from '@/assets/phone.svg';
import LocationIcon from '@/assets/location.svg';

const PersonalInfoSection = forwardRef(({ data, styles = {} }, ref) => {
    const parentStyles = {
        backgroundColor: styles.color,
        ...(styles.alignment === 'top'
            ? { gridRow: '1 / 2' }
            : styles.alignment === 'right'
            ? { gridColumn: '2 / 3', gridRow: '1'}
            : styles.alignment === 'bottom'
            ? { gridRow: '2 / 3' }
            : styles.alignment === 'left'
            ? { gridColumn: '1 / 2' }
            : {}
        )
    }
    const childStyles = {
        ...(styles.alignment === 'right' || styles.alignment === 'left'
            ? { flexDirection: 'column', height: '100%', alignItems: 'flex-start', justifyContent: 'flex-start' }
            : {}
        )
    }
    
    return(
        <section ref={ref} className='personal-info-container' style={parentStyles}>
            <div className='main-box'>
                <p className='data-name'>{data.name}</p>
            </div>
            <div className='info-box' style={childStyles}>
                {data.email !== '' && (
                    <div className='data-box'>
                        <img src={MailIcon} alt='Email icon' />
                        <p className='data-email'>{data.email}</p>
                    </div>
                )}
                {data.phone !== '' && (
                    <div className='data-box'>
                        <img src={PhoneIcon} alt='Phone icon' />
                        <p className='data-phone'>{data.phone}</p>
                    </div>
                )}
                {data.location !== '' && (
                    <div className='data-box'>
                        <img src={LocationIcon} alt='Location icon' />
                        <p className='data-location'>{data.location}</p>
                    </div>
                )}
            </div>
        </section>
    )
});

export default PersonalInfoSection;
