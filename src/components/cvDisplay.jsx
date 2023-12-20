import React from 'react';

const CVDisplay = ({ generalInfo, educationInfo, experienceInfo }) => {
  return (
    <section className='display'>
      <h2>General Information</h2>
        <section className="edit-section">
            <p>{generalInfo.name}</p>
            <p>{generalInfo.email}</p>
            <p>{generalInfo.phone}</p>
            <p>{generalInfo.address}</p>
        </section>

      <h2>Education</h2>
      {educationInfo.map((education, index) => (
        <div key={index}>
            <p>{education.name}</p>
            <p>{education.title}</p>
            <p>{education.startDate}</p>
            <p>{education.endDate}</p>
            <p>{education.location}</p>
        </div>
      ))}

      <h2>Professional Experience</h2>
      {experienceInfo.map((experience, index) => (
        <div key={index}>
        <p>{experience.name}</p>
        <p>{experience.position}</p>
        <p>{experience.startDate}</p>
        <p>{experience.endDate}</p>
        <p>{experience.description}</p>
        </div>
      ))}
    </section>
  );
};

export default CVDisplay;