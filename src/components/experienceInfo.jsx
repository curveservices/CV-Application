import { useState } from "react";

const ExperienceInfo = ({ onSubmit, data}) => {
    const [editMode, setEditMode] = useState(true);
    const [name, setName] = useState(data.name || ' ');
    const [position, setPosition] = useState(data.position || ' ');
    const [startDate, setStartDate] = useState(data.fromDate || ' ');
    const [endDate, setEndDate] = useState(data.toDate || ' ');
    const [location, setLocation] = useState(data.location || ' ');
    const [description, setDescription] = useState(data.main || ' ');
    
    const handleSubmit = () => {
        onSubmit({ name, position, description, startDate, endDate, location, description });
        setEditMode(false);
    };

    return (
       <section className="form">
           {editMode ? (
               <form>
                   <div className="title-container">
                   <i className="fa-solid fa-briefcase"></i>
                    <h2 className="title">Experience</h2>
                    </div>
                   <label htmlFor="company-name">Company name: </label>
                   <input
                   type="text"
                   id="company-name"
                   placeholder="Enter company name"
                   onChange={(e) => setName(e.target.value)} />
                   <label htmlFor="position">Position title: </label>
                   <input
                   type="text"
                   id="position"
                   placeholder="Enter position title"
                   onChange={(e) => setPosition(e.target.value)} />
                   <label htmlFor="start-date">Start date: </label>
                   <input
                   type='date'
                   id="start-date"
                   onChange={(e) => setStartDate(e.target.value) } />
                   <label htmlFor="end-date">End date: </label>
                   <input
                   type='date'
                   id="end-date"
                   onChange={(e) => setEndDate(e.target.value) } />
                   <label htmlFor="location">Location: </label>
                   <input 
                    type='text'
                    id='location'
                    placeholder="City, Country"
                    onChange={(e) => setLocation(e.target.value)} />
                   <label htmlFor="description">Description: </label>
                   <input 
                   type="text-area" rows='10'
                   id="description"
                   placeholder="Enter description"
                   onChange={(e) => setDescription(e.target.value)} />
                   <button onClick={handleSubmit}>Submit</button>
               </form>
           ) : (
            <section className="edit-section">
                <div className="title-container">
                    <i className="fa-solid fa-briefcase"></i>
                    <h2 className="title">Experience</h2>
                </div>
                <p>Company name: {name}</p>
                <p>Position: {position}</p>
                <p>Start date: {startDate}</p>
                <p>End date: {endDate}</p>
                <p>Description: {description}</p>
                <button onClick={(e) => setEditMode(true)}>Edit</button>
            </section>
           )}
       </section>
    );
};

export default ExperienceInfo