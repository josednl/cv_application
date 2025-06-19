import '@/styles/PersonalInfo.css';
import Input from './InputGroup.jsx';

export default function PersonalInfo() {

	return (
		<div className='personal-info'>
			<h1>Personal Information</h1>
			<form className='personal-info-form'>
				<Input label='Full Name' id='full-name' type='text' placeholder='e.g. John Doe' required={true} autoComplete='name' />
				<Input label='Email' id='email' type='email' placeholder='e.g. jhondoe@example.com' required={false} autoComplete='email' />
				<Input label='Phone Number' id='phone-number' type='tel' placeholder='e.g. +44 212 555 4567' required={false} autoComplete='tel' />
				<Input label='Location' id='location' type='text' placeholder='e.g. London, UK' required={false} autoComplete='country' />
			</form>
		</div>
	)
}
