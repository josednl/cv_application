import '@/styles/StyleBar.css';
import { useState, useEffect } from 'react';
import Button from '@/components/Button.jsx';

export default function StyleBar({ handleStyles, styles, temporalConfig }) {
    const [temporalStyles, setTemporalStyles] = useState({
        color: styles.color,
        alignment: styles.alignment,
        font: styles.font
    });
    const [fonts, setFonts] = useState([
        {name: 'Roboto', value: 'roboto'},
        {name: 'Montserrat', value: 'montserrat'},
        {name: 'Atkinson Hyperlegible Next', value: 'atkinson-hyperlegible-next'},
        {name: 'Libertinus Math', value: 'libertinus-math'},
        {name: 'Open Sans', value: 'open-sans'},
        {name: 'Playfair Display', value: 'playfair-display'}
    ]);
    const alignmentOptions = ['top', 'right', 'bottom', 'left'];

    useEffect(() => {
        const sorted = [...fonts].sort((a, b) =>
        a.name.localeCompare(b.name)
        );
        setFonts(sorted);
		temporalConfig({...styles, color: styles.color, alignment: styles.alignment, font: styles.font});
    }, []);

    function saveStyles() {
        handleStyles(temporalStyles.color, temporalStyles.alignment, temporalStyles.font);
    }

    return (
        <div className='style-bar'>
            <div className='style-item'>
                <label htmlFor='color-picker' className='input-label'>Accent Color</label>
                <input id='color-picker' name='color-picker' type='color' value={temporalStyles.color} onChange={(e) => {setTemporalStyles({...temporalStyles, color: e.target.value}); temporalConfig({...temporalStyles, color: e.target.value})}} />
            </div>
            <div className='style-item'>
                <p className='input-label'>Layout</p>
                <div className='display-options'>
                    {alignmentOptions.map((option) => (
                        <div key={`${option}-alignment-button`} className='d-option'>
                            <div className={`d-visual display-${option} ${temporalStyles.alignment === option ? 'selected' : ''}`} onClick={() => {setTemporalStyles({...temporalStyles, alignment: option}); temporalConfig({...temporalStyles, alignment: option})}}></div>
                            <p style={{textTransform: 'capitalize'}}>{option}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='style-item'>
                <label htmlFor='color-picker' className='input-label'>Font</label>
                <select name='text-font' id='text-font' value={temporalStyles.font} onChange={(e) => {setTemporalStyles({...temporalStyles, font: e.target.value}); temporalConfig({...temporalStyles, font: e.target.value})}} className={`${styles.font}-font-family`}>
                    {fonts.map((font) => (
                        <option key={font.value} value={font.value} className={`${font.value}-font-family`} >
                            {font.name}
                        </option>
                    ))}
                </select>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button type='success' text='Save' handleClick={saveStyles} />
            </div>
        </div>
    )
}