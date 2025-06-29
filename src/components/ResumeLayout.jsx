import PersonalInfoSection from '@/components/Resume/PersonalInfoSection.jsx';
import EducationalExperienceSection from '@/components/Resume/EducationalExperienceSection.jsx';
import PracticalExperienceSection from '@/components/Resume/PracticalExperienceSection.jsx';

export default function ResumeLayout({ personalData, educationData, practicalData, styles = {} }) {
    const layoutStyles = {
        width: '100%',
        minHeight: '792px',
        border: '1px solid #000000',
        display: 'grid',
        ...(styles.alignment === 'top'
            ? { gridTemplateRows: '1fr 5fr' }
            : styles.alignment === 'right'
            ? { gridTemplateColumns: '2fr 1fr' }
            : styles.alignment === 'bottom'
            ? { gridTemplateRows: '5fr 1fr' }
            : styles.alignment === 'left'
            ? { gridTemplateColumns: '1fr 2fr' }
            : {}
        )
    };

    return (
        <div style={layoutStyles} className={`${styles.font}-font-family`}>
            <PersonalInfoSection data={personalData} styles={styles} />
            <div>
                <EducationalExperienceSection data={educationData} />
                <PracticalExperienceSection data={practicalData} />
            </div>
        </div>
    );
}
