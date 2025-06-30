import ResumeLayout from '@/components/ResumeLayout.jsx';

export default function Resume({ personalData, educationData, practicalData, styles, sectionRefs }) {
    return (
        <ResumeLayout personalData={personalData} educationData={educationData} practicalData={practicalData} styles={styles} sectionRefs={sectionRefs} />
    );
}
