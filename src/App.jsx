import './styles/App.css';
import { useState } from 'react';
import Menu from '@/components/Menu/Menu.jsx';
import Tabs from '@/components/Builder/Tabs.jsx';
import Resume from '@/components/Resume/Resume.jsx';

function App() {
	const [personalData, setPersonalData] = useState({
		name: '',
		email: '',
		phone: '',
		location: '',
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setPersonalData(prevData => ({...prevData,[name]: value}));
	}

	return (
		<>
			<Menu />
			<main>
				<Tabs handleChange={handleChange} data={personalData} />
				<Resume personalData={personalData} />
			</main>
		</>
	)
}

export default App
