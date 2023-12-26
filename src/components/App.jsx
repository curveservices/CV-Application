import { useState } from 'react'
import GeneralInfo from './generalInfo'
import EducationInfo from './educationInfo'
import ExperienceInfo from './experienceInfo'
import CVDisplay from './cvDisplay'
import CreateHeader from './header'


import '../styles/App.css'


function App() {
  const initialGeneralInfo = {
    name: 'Mike Coder',
    email: 'mike.coder@example.com',
    phone: '123-456-7890',
    address: 'London, UK',
  }  

  const initialEducationInfo = [
    {
      name: 'University XYZ',
      title: 'Bachelor of Science',
      startDate: 'Jan 2010',
      endDate: 'Dec 2014',
      location: 'London, UK',
    },
  ];

  const initialExperienceInfo = [
    {
      name: 'Company ABC',
      position: 'Software Engineer',
      startDate: 'Jan 2015',
      endDate: 'Dec 2020',
      location: 'New York, USA',
      description: 'Worked on various projects...',
    },
  ];

  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);
  const [educationInfo, setEducationInfo] = useState(initialEducationInfo);
  const [experienceInfo, setExperienceInfo] = useState(initialExperienceInfo);


  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfo(data);
  };

  const handleEducationInfoSubmit = (data) => {
    setEducationInfo([...educationInfo, data ]);
  };

  const handleExperienceInfoSubmit = (data) => {
    setExperienceInfo([...experienceInfo, data]);
  };

  const handleClearAll = () => {
    setGeneralInfo({});
    setEducationInfo([]);
    setExperienceInfo([]);
  };

  const loadExample = () => {
    setGeneralInfo(initialGeneralInfo);
    setEducationInfo(initialEducationInfo);
    setExperienceInfo(initialExperienceInfo);
  }

  return (
    <>
      <CreateHeader />
      <main>
        <section className='side-bar'>
          <div className='button-container'>
            <button onClick={loadExample}>Example CV</button>
            <button onClick={handleClearAll}>Clear All</button>
          </div>
          <GeneralInfo onSubmit={handleGeneralInfoSubmit} data={generalInfo} />
          <EducationInfo onSubmit={handleEducationInfoSubmit} data={educationInfo} />
          <ExperienceInfo onSubmit={handleExperienceInfoSubmit} data={experienceInfo} />
        </section>
        <CVDisplay generalInfo={generalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} />
      </main>
    </>
  );
};

export default App
