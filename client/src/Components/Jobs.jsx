
import React from 'react';
import { Typography } from '@mui/material';

import { Link } from 'react-router-dom';

const Jobs = ({ applications }) => {
  return (
    <div>
      <Typography variant="h4">Opportunities</Typography>
      <ul>
        {applications.map((application, index) => (
          <li key={index} className="border-b border-blue-500 p-4">
            <Typography variant="h6">Job Title: {application.jobTitle}</Typography>
            <Typography variant="subtitle1">Hiring Manager: {application.hiringManager}</Typography>

            <Typography variant="h6">Contract Requests</Typography>
            <ul>
              {application.contractRequests.map((request, idx) => (
                <li key={idx}>{`${request.question}: ${request.answer}`}</li>
              ))}
            </ul>


            <Link
              to={{
                pathname: "/apply",
                state: {
                  jobTitle: application.jobTitle,
                  hiringManager: application.hiringManager,
                  contractRequests: application.contractRequests,
                },
              }}
              className=" inline-block bg-blue-500 text-white px-12 py-2 mt-2 rounded-md text-center"
            >
              Apply
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
