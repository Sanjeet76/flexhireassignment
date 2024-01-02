
import React from 'react';
import Jobs from '../Components/Jobs';

const JobsPage = () => {
  const jobApplications = [
    {
      jobTitle: 'Software Engineer',
      hiringManager: 'Jane Smith',
      contractRequests: [
        { question: 'Do you have experience with React?', answer: 'Yes' },
        { question: 'Complete this coding challenge:', answer: 'Code provided' },
      ],
    },
    {
      jobTitle: 'Frontend Developer',
      hiringManager: 'John Doe',
      contractRequests: [
        { question: 'What is your favorite frontend framework?', answer: 'React' },
        { question: 'Provide examples of your UI design work:', answer: 'Portfolio link' },
      ],
    },
    {
      jobTitle: 'Backend Developer',
      hiringManager: 'Sarah Johnson',
      contractRequests: [
        { question: 'Explain the principles of RESTful API design:', answer: 'Detailed explanation' },
        { question: 'Experience with databases:', answer: 'MongoDB, PostgreSQL' },
      ],
    },
    {
      jobTitle: 'Data Scientist',
      hiringManager: 'Michael Brown',
      contractRequests: [
        { question: 'What statistical analysis tools are you proficient in?', answer: 'Python, R' },
        { question: 'Experience with machine learning algorithms:', answer: 'Yes' },
      ],
    },
    {
      jobTitle: 'UX/UI Designer',
      hiringManager: 'Emily White',
      contractRequests: [
        { question: 'Provide examples of your UX design process:', answer: 'Case study links' },
        { question: 'Familiarity with design tools:', answer: 'Sketch, Figma' },
      ],
    },
  ];

  return <Jobs applications={jobApplications} />;
};

export default JobsPage;
