
import React from 'react';
import Profile from '../Components/Profile';

const ProfilePage = () => {
 
  const profileData = {
    name: 'Sanjeet Kumar',
    avatar: 'https://example.com/avatar.jpg',
    industry: 'Software Development',
    skills: ['React', 'Node.js', 'JavaScript'],
    experience: [
      { skill: 'React', years: 1 },
      { skill: 'Node.js', years: 1 },
      { skill: 'Devops', years: 1 },
    ],
    videoAnswers: ['Why do you want to work for Flexhire?', 'Tell us about your most challenging project.'],
  };

  return <Profile {...profileData} />;
};

export default ProfilePage;
