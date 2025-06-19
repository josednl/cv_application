import Input from '@/components/Builder/InputGroup.jsx';
import PersonalIcon from '@/assets/personal.svg';

export default function PersonalInfo() {

	return (
		<div className='section-content'>
			 <div className='section-title'>
				<img src={PersonalIcon} alt='Person icon' />
				<h1>Personal Information</h1>
			</div>
			<form className='section-content-form'>
				<Input label='Full Name' id='full-name' type='text' placeholder='e.g. John Doe' required={true} autoComplete='name' />
				<Input label='Email' id='email' type='email' placeholder='e.g. jhondoe@example.com' recommended={true} autoComplete='email' />
				<Input label='Phone Number' id='phone-number' type='tel' placeholder='e.g. +44 212 555 4567' recommended={true} autoComplete='tel' />
				<Input label='Location' id='location' type='text' placeholder='e.g. London, UK' recommended={true} autoComplete='country' />
			</form>
		</div>
	)
}
