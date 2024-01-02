
import React, { useState } from 'react';

import { Typography, Avatar, IconButton, Dialog, DialogTitle, Button, Input } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import './Profile.css';

const Profile = ({ name, avatar, industry, skills, experience, videoAnswers }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const handleUploadClick = (question) => {
    setOpenDialog(true);
    setSelectedQuestion(question);
  };



  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedQuestion('');
  };


  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
     
      localStorage.setItem('videoStorageKey', file.name);
      console.log(`Uploaded video for question "${selectedQuestion}": ${file.name}`);
      handleCloseDialog();
    }
  };

  return (
    <div className="mt-9">
      <div>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle1">{industry}</Typography>

        <div className="mt-6">
          <Typography variant="h6">Skills</Typography>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <Typography variant="h6">Experience</Typography>
          <ul>
            {experience.map((exp, index) => (
              <li key={index}>{`${exp.skill}: ${exp.years} years`}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <Typography variant="h6">Video Answers</Typography>
          <ul>
            {videoAnswers.map((answer, index) => (
              <li key={index} className="  mt-2">
                <span>{answer}</span>
                <IconButton color="primary" onClick={() => handleUploadClick(answer)}>
                  <CloudUploadIcon className="w-9 h-8" />
                </IconButton>
              </li>
            ))}
          </ul>
        </div>

      
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>{`Upload Video for "${selectedQuestion}"`}</DialogTitle>
          <div className="flex justify-between p-4">
           
            <Input type="file" onChange={handleVideoUpload} />
            <Button onClick={handleCloseDialog} variant="contained">
              Cancel
            </Button>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Profile;
