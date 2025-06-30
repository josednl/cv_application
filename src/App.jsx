import './styles/App.css';
import { useState, useRef, useCallback } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
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

	function handleDataChange(e, stateSetter) {
		const { name, value } = e.target;
		setIsDataChanging(true);
		stateSetter(prevData => ({...prevData,[name]: value}));
		
		setTimeout(() => {
			setPdfKey(prev => prev + 1);
			setIsDataChanging(false);
		}, 100);
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

	function setStyleConfiguration (color, alignment, font) {
		setConfig({...config, color: color, alignment: alignment, font: font});
		window.alert('Saved style customization');
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
		const confirmed = window.confirm('Are you sure you want to upload this data? This will overwrite all current information.');

    	if (!confirmed) return;

		setPdfError(null);

		setPersonalData({
			name: '',
			email: '',
			phone: '',
			location: '',
		});
		setEducationData([]);
		setPracticalData([]);

		setPdfKey(prev => prev + 1);

		setTimeout(() => {
			setPersonalData({
				name: 'Michael Anthony Reynolds',
				email: 'michael.reynolds87@example.com',
				phone: '+1 (312) 555-8432',
				location: 'Chicago, IL, USA'
			});
			
			setEducationData([
				{
					id: crypto.randomUUID(),
					school: 'University of Illinois at Urbana-Chanpaign',
					degree: 'Bachelor of Science in Computer Engineering',
					startDate: '1-8-2012',
					endDate: '28-5-2016',
					location: 'Urbana-Chanpaign, IL',
					description: 'Focused on embedded systems, data structures, and systems programming. Participated in undergraduate research on machine learning applications in IoT.'
				},
				{
					id: crypto.randomUUID(),
					school: 'Stanford University',
					degree: 'Master of Science in Artificial Intelligence',
					startDate: '15-9-2016',
					endDate: '10-6-2018',
					location: 'Stanford, CA',
					description: 'Specialized in deep learning and natural language processing. Completed thesis on generative adversarial networks in medical image analysis.'
				},
				{
					id: crypto.randomUUID(),
					school: 'MIT xPro',
					degree: 'Professional Certificate in Data Engineering',
					startDate: '5-1-2020',
					endDate: '30-6-2020',
					location: 'Online',
					description: 'Completed a six-month intensive program covering big data pipelines, cloud technologies, and real-time data processing using Apache Spark and Kafka.'
				},
			]);
			
			setPracticalData([
				{
					id: crypto.randomUUID(),
					company: 'Deloitte Consulting LLP',
					job: 'Senior Data Analyst',
					startDate: '10-7-2020',
					endDate: '',
					location: 'Chicago, IL (Hybrid)',
					description: 'Leads data-driven consulting projects.'
				},
				{
					id: crypto.randomUUID(),
					company: 'Capital One',
					job: 'Data Analyst',
					startDate: '3-3-2018',
					endDate: '30-6-2020',
					location: 'McLean, VA',
					description: 'Developed dashboards and models to optimize credit risk decisions and marketing campaigns. Automated reporting processes to reduce manual work by 40%.'
				},
				{
					id: crypto.randomUUID(),
					company: 'Intel Corporation',
					job: 'Data Science Intern',
					startDate: '1-6-2017',
					endDate: '31-8-2017',
					location: 'Santa Clara, CA',
					description: 'Built predictive models to forecast chip performance variability. Collaborated with hardware teams to integrate data insights into development cycles.'
				},
			]);
		}, 100);
    }

	function cleanData() {
		const confirmed = window.confirm('Are you sure you want to delete all data?');

    	if (!confirmed) return;

		setPdfError(null);

		setPersonalData({
			name: '',
			email: '',
			phone: '',
			location: '',
		});
		setEducationData([]);
		setPracticalData([]);
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

	return (
		<>
			<Menu handleClick={setMenuIndex} />
			<main>
				{activeMenuIndex === 0 ? (
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
								<Button text='Load Example Data' handleClick={loadData} />
								<Button text='Clean' type='success' handleClick={cleanData} />
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
						<div ref={contentRef}>
							<Resume 
								personalData={personalData} 
								educationData={educationData} 
								practicalData={practicalData} 
								styles={config} 
								sectionRefs={sectionRefs} 
							/>
						</div>
					</>
				) : (
					<>
						<StyleBar handleStyles={setStyleConfiguration} styles={config} temporalConfig={setTemporalConfig} />
						<Preview styles={temporalConfig} />
					</>
				)}
			</main>
		</>
	)
}

export default App