import '@/styles/PersonalInfoSection.css';
import MailIcon from '@/assets/mail.svg';
import PhoneIcon from '@/assets/phone.svg';
import LocationIcon from '@/assets/location.svg';


export default function PersonalInfoSection({ personalData }) {

    return(
        <div className="personal-info-container">
            <div className="main-box">
                <p className="data-name">{personalData.name}</p>
            </div>
            <div className="info-box">
                {personalData.email !== '' && (
                    <div className='data-box'>
                        <img src={MailIcon} alt='Email icon' />
                        <p className="data-email">{personalData.email}</p>
                    </div>
                )}
                {personalData.phone !== '' && (
                    <div className='data-box'>
                        <img src={PhoneIcon} alt='Phone icon' />
                        <p className="data-phone">{personalData.phone}</p>
                    </div>
                )}
                {personalData.location !== '' && (
                    <div className='data-box'>
                        <img src={LocationIcon} alt='Location icon' />
                        <p className="data-location">{personalData.location}</p>
                    </div>
                )}
            </div>
        </div>
    )
} 