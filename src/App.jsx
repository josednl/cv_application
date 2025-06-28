import './styles/App.css';
import { useState } from 'react';
import Menu from '@/components/Menu/Menu.jsx';
import Tabs from '@/components/Builder/Tabs.jsx';
import Resume from '@/components/Resume/Resume.jsx';
import StyleBar from '@/components/Customize/StyleBar.jsx';

function App() {
	const [activeMenuIndex, setActiveMenuIndex] = useState(0);
	const [personalData, setPersonalData] = useState({
		name: '',
		email: '',
		phone: '',
		location: '',
	});
	const [config, setConfig] = useState({
        color: '#eaeaea',
        alignment: 'top',
        font: 'roboto',
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

	function setMenuIndex(index) {
		setActiveMenuIndex(index);
	}

	function setStyleConfiguration (color, alignment, font) {
		setConfig({...config, color: color, alignment: alignment, font: font});
	}

	return (
		<>
			<Menu handleClick={setMenuIndex} />
			<main>
				{activeMenuIndex === 0 ? (
					<>
						<Tabs handleDataChange={handleDataChange} handleDataSetChange={handleDataSetChange} personalData={personalData} personalDataSetter={setPersonalData} educationData={educationData} educationalDataSetter={setEducationData} practicalDataSetter={setPracticalData} practicalData={practicalData} />
						<Resume personalData={personalData} educationData={educationData} practicalData={practicalData} />
					</>
				) : (
					<>
						<StyleBar handleStyles={setStyleConfiguration} styles={config} />
					</>
				)}

			</main>
		</>
	)
}

export default App
