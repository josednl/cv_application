import './styles/App.css';
import Menu from '@/components/Menu/Menu.jsx';
import Tabs from '@/components/Builder/Tabs.jsx';
import PersonalInfo from '@/components/Builder/PersonalInfo.jsx';
import EducationalExperience from '@/components/Builder/EducationalExperience.jsx';

function App() {

	const tabs = [
		{ label: 'Personal Information', content: <PersonalInfo /> },
		{ label: 'Education', content: <EducationalExperience /> },
	];

	return (
		<>
			<Menu />
			<main>
				<Tabs tabs={tabs}/>
			</main>
		</>
	)
}

export default App
