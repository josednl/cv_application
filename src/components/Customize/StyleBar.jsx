import '@/styles/StyleBar.css';
import { useState, useEffect, useMemo, useCallback } from 'react';
import Button from '@/components/Button.jsx';

export default function StyleBar({ handleStyles, styles, temporalConfig }) {
	const [temporalStyles, setTemporalStyles] = useState({ ...styles });

	const fonts = useMemo(() => [
		{ name: 'Atkinson Hyperlegible Next', value: 'atkinson-hyperlegible-next' },
		{ name: 'Libertinus Math', value: 'libertinus-math' },
		{ name: 'Montserrat', value: 'montserrat' },
		{ name: 'Open Sans', value: 'open-sans' },
		{ name: 'Playfair Display', value: 'playfair-display' },
		{ name: 'Roboto', value: 'roboto' }
	].sort((a, b) => a.name.localeCompare(b.name)), []);

	const alignmentOptions = ['top', 'right', 'bottom', 'left'];

	useEffect(() => {
		temporalConfig(temporalStyles);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const handleChange = useCallback((key, value) => {
		setTemporalStyles(prev => {
			const updated = { ...prev, [key]: value };
			temporalConfig(updated);
			return updated;
		});
	}, [temporalConfig]);

	const saveStyles = useCallback(() => {
		handleStyles(temporalStyles.color, temporalStyles.alignment, temporalStyles.font);
	}, [handleStyles, temporalStyles]);

	return (
		<div className='style-bar'>
			<div className='style-item'>
				<label htmlFor='color-picker' className='input-label'>Accent Color</label>
				<input
					id='color-picker'
					type='color'
					value={temporalStyles.color}
					onChange={(e) => handleChange('color', e.target.value)}
				/>
			</div>

			<div className='style-item'>
				<p className='input-label'>Layout</p>
				<div className='display-options'>
					{alignmentOptions.map((option) => (
						<div key={option} className='d-option'>
							<div
								className={`d-visual display-${option} ${temporalStyles.alignment === option ? 'selected' : ''}`}
								onClick={() => handleChange('alignment', option)}
							/>
							<p style={{ textTransform: 'capitalize' }}>{option}</p>
						</div>
					))}
				</div>
			</div>

			<div className='style-item'>
				<label htmlFor='text-font' className='input-label'>Font</label>
				<select
					id='text-font'
					value={temporalStyles.font}
					onChange={(e) => handleChange('font', e.target.value)}
					className={`${styles.font}-font-family`}
				>
					{fonts.map((font) => (
						<option key={font.value} value={font.value} className={`${font.value}-font-family`}>
							{font.name}
						</option>
					))}
				</select>
			</div>

			<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Button type='success' text='Save' handleClick={saveStyles} />
			</div>
		</div>
	);
}
