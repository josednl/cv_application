import ResumeLayout from '@/components/ResumeLayout.jsx';
import { exampleData } from '@/data/exampleData.js';

export default function Preview({ styles = {} }) {

    return (
        <ResumeLayout 
            personalData={exampleData.personalData} 
            educationData={exampleData.educationData} 
            practicalData={exampleData.practicalData} 
            styles={styles} 
        />
    );
}
