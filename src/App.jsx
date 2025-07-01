import './styles/App.css';
import { useState, useRef, useCallback } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { exampleData } from '@/data/exampleData.js';
import Menu from '@/components/Menu/Menu.jsx';
import Tabs from '@/components/Builder/Tabs.jsx';
import Resume from '@/components/Resume/Resume.jsx';
import StyleBar from '@/components/Customize/StyleBar.jsx';
import Preview from '@/components/Customize/Preview.jsx';
import Button from '@/components/Button.jsx';
import PDFDocument from '@/components/PDFDocument.jsx';
import DownloadIcon from '@/assets/download.svg';

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
		textColor: '#000000',
        alignment: 'top',
        font: 'roboto',
    });
	const [educationData, setEducationData] = useState([]);
	const [practicalData, setPracticalData] = useState([]);
	const [temporalConfig, setTemporalConfig] = useState(config);
	const [pdfError, setPdfError] = useState(null);
	const [pdfKey, setPdfKey] = useState(0);
	const [isDataChanging, setIsDataChanging] = useState(false); 
	const contentRef = useRef();
	const emptyPersonalData = { name: '', email: '', phone: '', location: '' };
	const emptyEducationData = [];
	const emptyPracticalData = [];

	function resetAllData() {
		setPersonalData(emptyPersonalData);
		setEducationData(emptyEducationData);
		setPracticalData(emptyPracticalData);
	}

	function handleDataChange(e, stateSetter) {
		const { name, value } = e.target;
		setIsDataChanging(true);
		stateSetter(prevData => ({...prevData,[name]: value}));
		
		setTimeout(() => {
			setPdfKey(prev => prev + 1);
			setIsDataChanging(false);
		}, 300);
	}

	const handleArrayDataChange = useCallback((newData, setter) => {
		setIsDataChanging(true);
		setter(newData);
		
		setTimeout(() => {
			setPdfKey(prev => prev + 1);
			setIsDataChanging(false);
		}, 300);
	}, []);

	function setMenuIndex(index) {
		setActiveMenuIndex(index);
	}

	function setStyleConfiguration (color, textColor, alignment, font) {
		setConfig({...config, color: color, textColor: textColor, alignment: alignment, font: font});
		window.alert('The style customization was saved');
	}

	const sectionRefs = {
		personal: useRef(),
  		education: useRef(),
  		experience: useRef()
	};

	const canGeneratePDF = () => {
		return personalData.name.trim() !== '' && (educationData.length > 0 || practicalData.length > 0);
	};

	const handlePDFError = useCallback((error) => {
		console.error('PDF Error:', error);
		setPdfError(error.message || 'Error generating PDF');
	}, []);

	function loadData () {
		if (!window.confirm('Are you sure you want to upload this data? This will overwrite all current information.')) return;

		setPdfError(null);
		resetAllData();
		setPdfKey(prev => prev + 1);

		setTimeout(() => {
			setPersonalData(exampleData.personalData);
			setEducationData(exampleData.educationData);
			setPracticalData(exampleData.practicalData);
		}, 300);
    }

	function clearData() {
		if (!window.confirm('Are you sure you want to delete all data?')) return;
		setPdfError(null);
		resetAllData();
	}

	const createPDFDocument = useCallback(() => {
		if (isDataChanging) return null;
		try {
			return (
				<PDFDocument 
					key={pdfKey}
					personalData={personalData}
					educationData={educationData}
					practicalData={practicalData}
					config={config}
				/>
			);
		} catch (error) {
			console.error('Error creating PDF document:', error);
			handlePDFError(error);
			return null;
		}
	}, [personalData, educationData, practicalData, config, pdfKey, isDataChanging, handlePDFError]);

	function renderBuilderView() {
		return (
			<>
				<div>
					<Tabs 
						handleDataChange={handleDataChange} 
						handleArrayDataChange={handleArrayDataChange}
						personalData={personalData} 
						personalDataSetter={setPersonalData} 
						educationData={educationData} 
						educationalDataSetter={setEducationData} 
						practicalDataSetter={setPracticalData} 
						practicalData={practicalData} 
					/>
					<div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '15px 0px', gap: '10px'}}>
						{canGeneratePDF() && !isDataChanging && (
							<PDFDownloadLink
								key={`pdf-download-${pdfKey}`}
								document={createPDFDocument()}
								fileName='resume.pdf'
								onError={handlePDFError}
							>
								{({ loading, error }) => (
									<Button 
										type='danger' 
										text={loading ? 'Generating PDF...' : error ? 'PDF Error' : 'Download PDF'} 
										icon={DownloadIcon}
									/>
								)}
							</PDFDownloadLink>
						)}
						<Button 
							text='Load Example Data' 
							handleClick={loadData} 
						/>
						<Button 
							text='Clear All' 
							type='success' 
							handleClick={clearData} 
						/>
					</div>
					
					{pdfError && (
						<div style={{
							backgroundColor: '#ffebee',
							color: '#c62828',
							padding: '10px',
							borderRadius: '4px',
							margin: '10px 0',
							border: '1px solid #ef5350'
						}}>
							Error: {pdfError}
						</div>
					)}
				</div>
				<div style={{ overflowX: 'scroll' }} ref={contentRef}>
					<Resume 
						personalData={personalData} 
						educationData={educationData} 
						practicalData={practicalData} 
						styles={config} 
						sectionRefs={sectionRefs} 
					/>
				</div>
			</>
		);
	}

	function renderStyleView() {
		return (
			<>
				<StyleBar 
					handleStyles={setStyleConfiguration} 
					styles={config} 
					temporalConfig={setTemporalConfig} 
				/>
				<Preview 
					styles={temporalConfig} 
				/>
			</>
		);
	}

	return (
		<>
			<Menu handleClick={setMenuIndex} />
			<main>
				 {activeMenuIndex === 0 ? renderBuilderView() : renderStyleView()}
			</main>
		</>
	)
}

export default App
