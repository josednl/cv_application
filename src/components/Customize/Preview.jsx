import ResumeLayout from '@/components/ResumeLayout.jsx';

export default function Preview({ styles = {} }) {
    const exampleData = {
        personalData: {
            name: 'Michael Anthony Reynolds',
            email: 'michael.reynolds87@example.com',
            phone: '+1 (312) 555-8432',
            location: 'Chicago, IL, USA'
        },
        educationData: [
            {
                id: crypto.randomUUID(),
                school: 'University of Illinois at Urbana-Chanpaign',
                degree: 'Bachelor of Science in Computer Engineering',
                startDate: '1-8-2012',
                endDate: '28-5-2016',
                location: 'Urbana-Chanpaign, IL',
                description: 'Focused on embedded systems, data structures, and systems programming. Participated in undergraduate research on machine learning applications in IoT.'
            },
            // ...
        ],
        practicalData: [
            {
                id: crypto.randomUUID(),
                company: 'Deloitte Consulting LLP',
                job: 'Senior Data Analyst',
                startDate: '-10-7-2020',
                endDate: '',
                location: 'Chicago, IL (Hybrid)',
                description: 'Leads data-driven consulting projects...'
            },
            // ...
        ]
    };

    return (
        <ResumeLayout
            personalData={exampleData.personalData}
            educationData={exampleData.educationData}
            practicalData={exampleData.practicalData}
            styles={styles}
        />
    );
}
