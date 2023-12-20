import React from 'react';

const CVDisplay = ({ generalInfo, educationInfo, experienceInfo }) => {
  return (
    <article className='display'>

        <h2 className='title'>{generalInfo.name}</h2>
        <section className='display-general'>
            <p><i className="fa-solid fa-envelope"></i> {generalInfo.email}</p>
            <p><i className="fa-solid fa-phone"></i> {generalInfo.phone}</p>
            <p><i className="fa-solid fa-location-dot"></i> {generalInfo.address}</p>
        </section>

        <div className='display-ed-ex'>
            <h3 className='title'>Education</h3>
            <section className='display-section'>
                <p><b>{educationInfo.name}</b></p>
                <p>{educationInfo.title}</p>
                <p>{educationInfo.startDate}</p>
                <p>{educationInfo.endDate}</p>
                <p>{educationInfo.location}</p>
            </section>

            <h3 className='title'>Professional Experience</h3>
            <section className='display-section'>
                <p><b>{experienceInfo.name}</b></p>
                <p>{experienceInfo.position}</p>
                <p>{experienceInfo.startDate}</p>
                <p>{experienceInfo.endDate}</p>
                <p>{experienceInfo.description}</p>
            </section>
        </div>
    </article>
  );
};

export default CVDisplay;