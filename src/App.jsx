import './styles/App.css';
import { useState, useRef } from 'react';
import Menu from '@/components/Menu/Menu.jsx';
import Tabs from '@/components/Builder/Tabs.jsx';
import Resume from '@/components/Resume/Resume.jsx';
import StyleBar from '@/components/Customize/StyleBar.jsx';
import Preview from '@/components/Customize/Preview.jsx';
import Button from '@/components/Button.jsx';
import DownloadIcon from '@/assets/download.svg';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
	const contentRef = useRef();

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
		window.alert('Saved style customization');
	}

	const sectionRefs = {
		personal: useRef(),
  		education: useRef(),
  		experience: useRef()
	};

	const handleDownloadPDF = async () => {
		const orientation = (config.alignment === 'left' || config.alignment === 'right') ? 'landscape' : 'portrait';
		const pdf = new jsPDF(orientation, 'mm', 'a4');
		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = pdf.internal.pageSize.getHeight();

		const originalWidth = contentRef.current.style.width;
		const isHorizontalLayout = config.alignment === 'left' || config.alignment === 'right';
		
		if (isHorizontalLayout) {
			contentRef.current.style.width = '297mm';
		} else {
			contentRef.current.style.width = '210mm';
		}
		contentRef.current.offsetHeight;

		const contentBoxes = contentRef.current.querySelectorAll('.content-box');
		const contentBoxPositions = Array.from(contentBoxes).map(box => {
			const rect = box.getBoundingClientRect();
			const containerRect = contentRef.current.getBoundingClientRect();
			return {
				top: rect.top - containerRect.top,
				bottom: rect.bottom - containerRect.top,
				height: rect.height
			};
		});

		const canvas = await html2canvas(contentRef.current, { 
			scale: isHorizontalLayout ? 1.2 : 2,
			useCORS: true,
			allowTaint: true,
			backgroundColor: '#ffffff',
			width: contentRef.current.scrollWidth,
			height: contentRef.current.scrollHeight
		});

		contentRef.current.style.width = originalWidth;
		
		const imgData = canvas.toDataURL('image/png');
		const imgWidth = pdfWidth;
		const imgHeight = (canvas.height * pdfWidth) / canvas.width;

		if (imgHeight <= pdfHeight) {
			pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
		} else {
			let currentY = 0;
			let pageNumber = 0;
			const pixelsPerMM = canvas.height / (contentRef.current.scrollHeight / 3.7795275591);
			const maxPageHeightInPixels = (pdfHeight * pixelsPerMM);

			while (currentY < canvas.height) {
				let nextY = Math.min(currentY + maxPageHeightInPixels, canvas.height);
				
				if (nextY < canvas.height) {
					let bestCutPoint = nextY;
					let minDistance = Infinity;

					for (const box of contentBoxPositions) {
						const boxTopInPixels = (box.top / contentRef.current.scrollHeight) * canvas.height;
						const boxBottomInPixels = (box.bottom / contentRef.current.scrollHeight) * canvas.height;
						
						if (boxTopInPixels < nextY && boxBottomInPixels > nextY) {
							if (boxTopInPixels > currentY) {
								const distance = nextY - boxTopInPixels;
								if (distance < minDistance && distance >= 0) {
									minDistance = distance;
									bestCutPoint = boxTopInPixels;
								}
							}

							if (boxBottomInPixels - currentY <= maxPageHeightInPixels * 1.1) {
								const distance = boxBottomInPixels - nextY;
								if (distance < minDistance) {
									minDistance = distance;
									bestCutPoint = boxBottomInPixels;
								}
							}
						}
					}

					nextY = bestCutPoint;
				}

				const pageHeight = nextY - currentY;
				const tempCanvas = document.createElement('canvas');
				const tempCtx = tempCanvas.getContext('2d');
				tempCanvas.width = canvas.width;
				tempCanvas.height = pageHeight;
				
				tempCtx.drawImage(
					canvas, 
					0, currentY, canvas.width, pageHeight,
					0, 0, canvas.width, pageHeight
				);
				
				const tempImgData = tempCanvas.toDataURL('image/png');
				const tempImgHeight = (pageHeight * pdfWidth) / canvas.width;
				
				if (pageNumber > 0) {
					pdf.addPage();
				}
				
				pdf.addImage(tempImgData, 'PNG', 0, 0, pdfWidth, tempImgHeight);
				
				currentY = nextY;
				pageNumber++;
			}
		}

		pdf.save('resume.pdf');
	};

	return (
		<>
			<Menu handleClick={setMenuIndex} />
			<main>
				{activeMenuIndex === 0 ? (
					<>
						<div>
							<Tabs handleDataChange={handleDataChange} handleDataSetChange={handleDataSetChange} personalData={personalData} personalDataSetter={setPersonalData} educationData={educationData} educationalDataSetter={setEducationData} practicalDataSetter={setPracticalData} practicalData={practicalData} />
							<div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '15px 0px'}}>
								<Button type='danger' text='Download as PDF' icon={DownloadIcon} handleClick={handleDownloadPDF} />
							</div>
						</div>
						<div ref={contentRef}>
							<Resume personalData={personalData} educationData={educationData} practicalData={practicalData} styles={config} sectionRefs={sectionRefs} />
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
