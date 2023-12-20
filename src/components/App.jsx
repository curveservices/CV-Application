import { useState } from 'react'
import GeneralInfo from './generalInfo'
import EducationInfo from './educationInfo'
import ExperienceInfo from './experienceInfo'
import CVDisplay from './cvDisplay'
import CreateHeader from './header'


import '../styles/App.css'


function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfo(data);
  };

  const handleEducationInfoSubmit = (data) => {
    setEducationInfo([educationInfo,data]);
  };

  const handleExperienceInfoSubmit = (data) => {
    setExperienceInfo([...experienceInfo, data]);
  };

  return (
    <>
      <CreateHeader />
      <GeneralInfo onSubmit={handleGeneralInfoSubmit} data={generalInfo} />
      <EducationInfo onSubmit={handleEducationInfoSubmit} data={educationInfo} />
      <ExperienceInfo onSubmit={handleExperienceInfoSubmit} data={experienceInfo} />
      <CVDisplay generalInfo={generalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} />
    </>
  );
};

export default App
