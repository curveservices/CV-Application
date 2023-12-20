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
                    <h2 className="title">Education</h2>
                    <label htmlFor="school">School: </label>
                    <input
                    type='text'
                    id='school'
                    placeholder="School"
                    onChange={(e) => setSchoolName(e.target.value)}/>
                    <label htmlFor="degree">Degree: </label>
                    <input
                    type='text'
                    id='degree'
                    placeholder="Qualification"
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
                    <h2 className="preview-title">Education</h2>
                    <p>{name}</p>
                    <p>{title}</p>
                    <p>{startDate}</p>
                    <p>{endDate}</p>
                    <p>{location}</p>
                    <button onClick={(e) => setEditMode(true)}>Edit</button>
                </section>
            )}
        </section>
    );
};

export default EducationInfo