import '@/styles/StyleBar.css';
import { useState, useEffect } from 'react';
import Button from '@/components/Button.jsx';

export default function StyleBar({ handleStyles, styles }) {
    const [selectedColor, setSelectedColor] = useState(styles.color);
    const [selectedAlignment, setSelectedAlignment] = useState(styles.alignment);
    const [selectedFont, setSelectedFont] = useState(styles.font);
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
    }, []);

    function saveStyles() {
        handleStyles(selectedColor, selectedAlignment, selectedFont);
    }

    return (
        <div className='style-bar'>
            <div className='style-item'>
                <label htmlFor='color-picker' className='input-label'>Accent Color</label>
                <input id='color-picker' name='color-picker' type='color' value={selectedColor} onChange={(e) => {setSelectedColor(e.target.value)}} />
            </div>
            <div className='style-item'>
                <p className='input-label'>Layout</p>
                <div className='display-options'>
                    {alignmentOptions.map((option) => (
                        <div key={`${option}-alignment-button`} className='d-option'>
                            <div className={`d-visual display-top ${selectedAlignment === option ? 'selected' : ''}`} onClick={() => {setSelectedAlignment(option)}}></div>
                            <p style={{textTransform: 'capitalize'}}>{option}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='style-item'>
                <label htmlFor='color-picker' className='input-label'>Font</label>
                <select name='text-font' id='text-font' value={selectedFont} onChange={(e) => {setSelectedFont(e.target.value)}} className={`${styles.font}-font-family`}>
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