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

	const [educationData, setEducationData] = useState([]);
	const [practicalData, setPracticalData] = useState([]);

	function handleDataChange(e, stateSetter) {
		const { name, value } = e.target;
		stateSetter(prevData => ({...prevData,[name]: value}));
	}

	function handleDataSetChange(e, stateSetter, id) {
		 const { name, value } = e.target;

		stateSetter(prevData =>
			prevData.map(item =>
			item.id === id
				? { ...item, [name]: value }
				: item
			)
		);
	}

	return (
		<>
			<Menu />
			<main>
				<Tabs handleDataChange={handleDataChange} handleDataSetChange={handleDataSetChange} personalData={personalData} personalDataSetter={setPersonalData} educationData={educationData} educationalDataSetter={setEducationData} practicalDataSetter={setPracticalData} practicalData={practicalData} />
				<Resume personalData={personalData} educationData={educationData} practicalData={practicalData} />
			</main>
		</>
	)
}

export default App
