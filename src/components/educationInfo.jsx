import { useState } from "react";

const EducationInfo = ({ onSubmit, data}) => {
    const [editMode, setEditMode] = useState(true);
    const [name, setSchoolName] = useState(data.name || ' ');
    const [title, setTitleName] = useState(data.title || ' ');
    const [startDate, setStartDate] = useState(data.StartDate || ' ');
    const [endDate, setEndDate] = useState(data.endDate)
    const [location, setLocation] = useState(data.location || ' ');

    const handleSubmit = () => {
        onSubmit({ name, title, startDate, endDate, location });
        setEditMode(false);
    };

    return (
        <section className="form">
            {editMode ? (
                <form>
                    <div className="title-container">
                        <i className="fa-solid fa-graduation-cap"></i>
                        <h2 className="title">Education</h2>
                    </div>
                    <label htmlFor="school">School: </label>
                    <input
                    type='text'
                    id='school'
                    placeholder="Enter school name"
                    onChange={(e) => setSchoolName(e.target.value)}/>
                    <label htmlFor="degree">Qualification: </label>
                    <input
                    type='text'
                    id='degree'
                    placeholder="Enter qualification"
                    onChange={(e) => setTitleName(e.target.value)} />
                    <label htmlFor="start-date">Start Date: </label>
                    <input
                    type='date'
                    id='start-date'
                    onChange={(e) => setStartDate(e.target.value)} />
                    <label htmlFor="end-date">End Date: </label>
                    <input
                    type='date'
                    id='end-date'
                    placeholder="Select date"
                    onChange={(e) => setEndDate(e.target.value)} />
                    <label htmlFor="location">Location: </label>
                    <input 
                    type='text'
                    id='location'
                    placeholder="City, Country"
                    onChange={(e) => setLocation(e.target.value)} />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            ) : (
                <section className="edit-section">
                    <div className="title-container">
                        <i className="fa-solid fa-graduation-cap"></i>
                        <h2 className="title">Education</h2>
                    </div>
                    <p>School: {name}</p>
                    <p>Qualification: {title}</p>
                    <p>Start Date: {startDate}</p>
                    <p>End Date: {endDate}</p>
                    <p>Location: {location}</p>
                    <button onClick={(e) => setEditMode(true)}>Edit</button>
                </section>
            )}
        </section>
    );
};

export default EducationInfo