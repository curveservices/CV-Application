import { useState } from "react"
import '../styles/generalInfo.css'

const GeneralInfo = ({onSubmit, data}) => {
    const [editMode, setEditMode] = useState(true);
    const [name, setName] = useState(data.name || ' ');
    const [email, setEmail] = useState(data.email || ' ');
    const [phone, setPhone] = useState(data.phone || ' ');
    const [address, setAddress] = useState(data.address || ' ');

    const handleSubmit = () => {
        onSubmit({ name, email, phone, address});
        setEditMode(false);
    };

    return (
        <section className="form">
            {editMode ? (
                <form action="#">
                    <h2 className="title">Personal Details</h2>
                    <label htmlFor="name" >Full Name: </label>
                    <input 
                    type='text' 
                    id='name'
                    placeholder="Enter full name"
                    onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="email">Email: </label>
                    <input 
                    type="text" 
                    id='email' placeholder="Enter email address" 
                    onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="phone">Phone: </label>
                    <input 
                    type="number" 
                    id='phone' placeholder="Enter phone number" 
                    onChange={(e) => setPhone(e.target.value)} />
                    <label htmlFor="address">Address: </label>
                    <input 
                    type="text" 
                    id='address' 
                    placeholder="City, Country" 
                    onChange={(e) => setAddress(e.target.value)} />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            ) : (
                <section className="edit-section">
                <h2 className="title">Personal Details</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>
                <button onClick={() => setEditMode(true)}>
                <i className="fa-regular fa-pen-to-square"></i> Edit</button>
              </section>

            )}
        </section>
    );
};

export default GeneralInfo
