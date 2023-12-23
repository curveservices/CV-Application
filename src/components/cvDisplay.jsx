import React from "react";

const CVDisplay = ({ generalInfo, educationInfo, experienceInfo }) => {

  return (
    <article className='display'>

        <h2 className='title'>{generalInfo.name}</h2>
        <section className='display-general'>
            <p><i className="fa-solid fa-envelope"></i> {generalInfo.email}</p>
            <p><i className="fa-solid fa-phone"></i> {generalInfo.phone}</p>
            <p><i className="fa-solid fa-location-dot"></i> {generalInfo.address}</p>
        </section>

        <h3 className="title">Education</h3>
        {educationInfo.map((education, index) => 
            <section  className="display-section" key={index}>
                <div>
                    <p className="info">{education.startDate} to {education.endDate}</p>
                    <p className="info">{education.location}</p>
                </div>
                <div>
                    <p className="info"><b>{education.name}</b></p>
                    <p className="info">{education.title}</p>
                </div>
             
            </section>
        )}

        <h3 className='title'>Professional Experience</h3>
        {experienceInfo.map((experience, index) => 
        <div className='display-section' key={index}>
            <div>
                <p className="info">{experience.startDate} to {experience.endDate}</p>
                <p className="info">{experience.location}</p>
            </div>
            <div>
                <p className="info"><b>{experience.name}</b></p>
                <p className="info">{experience.position}</p>
                <p className="info">{experience.description}</p>
            </div>
            
        </div>
        )}
    </article>
  );
};

export default CVDisplay;