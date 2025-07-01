export const exampleData = {
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
            startDate: '2012-08-01',
            endDate: '2016-05-28',
            location: 'Urbana-Chanpaign, IL',
            description: 'Focused on embedded systems, data structures, and systems programming. Participated in undergraduate research on machine learning applications in IoT.'
        },
        {
            id: crypto.randomUUID(),
            school: 'Stanford University',
            degree: 'Master of Science in Artificial Intelligence',
            startDate: '2016-09-15',
            endDate: '2018-06-10',
            location: 'Stanford, CA',
            description: 'Specialized in deep learning and natural language processing. Completed thesis on generative adversarial networks in medical image analysis.'
        },
        {
            id: crypto.randomUUID(),
            school: 'MIT xPro',
            degree: 'Professional Certificate in Data Engineering',
            startDate: '2020-01-05',
            endDate: '2020-06-30',
            location: 'Online',
            description: 'Completed a six-month intensive program covering big data pipelines, cloud technologies, and real-time data processing using Apache Spark and Kafka.'
        },
    ],
    practicalData: [
        {
            id: crypto.randomUUID(),
            company: 'Deloitte Consulting LLP',
            job: 'Senior Data Analyst',
            startDate: '2020-07-10',
            endDate: '',
            location: 'Chicago, IL (Hybrid)',
            description: 'Leads data-driven consulting projects.'
        },
        {
            id: crypto.randomUUID(),
            company: 'Capital One',
            job: 'Data Analyst',
            startDate: '2018-03-03',
            endDate: '2020-06-30',
            location: 'McLean, VA',
            description: 'Developed dashboards and models to optimize credit risk decisions and marketing campaigns. Automated reporting processes to reduce manual work by 40%.'
        },
        {
            id: crypto.randomUUID(),
            company: 'Intel Corporation',
            job: 'Data Science Intern',
            startDate: '2017-06-01',
            endDate: '2017-08-31',
            location: 'Santa Clara, CA',
            description: 'Built predictive models to forecast chip performance variability. Collaborated with hardware teams to integrate data insights into development cycles.'
        },
    ]
};
