import Input from '@/components/Builder/InputGroup.jsx';
import PersonalIcon from '@/assets/personal.svg';

export default function PersonalInfo({ handleDataChange, data }) {

	return (
		<div className='section-content'>
			 <div className='section-title'>
				<img src={PersonalIcon} alt='Person icon' />
				<h1>Personal Information</h1>
			</div>
			<form className='section-content-form'>
				<Input label='Full Name' id='full-name' name='name' type='text' value={data.name} placeholder='e.g. John Doe' required={true} autoComplete='name' onChange={handleDataChange} />
				<Input label='Email' id='email' name='email' type='email' value={data.email} placeholder='e.g. jhondoe@example.com' recommended={true} autoComplete='email' onChange={handleDataChange} />
				<Input label='Phone Number' id='phone-number' name='phone' type='tel' value={data.phone} placeholder='e.g. +44 212 555 4567' recommended={true} autoComplete='tel' onChange={handleDataChange} />
				<Input label='Location' id='location' name='location' type='text' value={data.location} placeholder='e.g. London, UK' recommended={true} autoComplete='country' onChange={handleDataChange} />
			</form>
		</div>
	)
}
