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
                <form>
                    <h2 className="title">Personal Details</h2>
                    <label htmlFor="name" >Full Name: </label>
                    <input 
                    type='text' 
                    id='name'
                    placeholder="Enter full name"
                    onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="email">Email address: </label>
                    <input 
                    type="text" 
                    id='email' placeholder="Enter email address" 
                    onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="phone">Phone number: </label>
                    <input 
                    type="number" 
                    id='phone' placeholder="Enter phone number" 
                    onChange={(e) => setPhone(e.target.value)} />
                    <label htmlFor="address">Address: </label>
                    <input 
                    type="text" 
                    id='address' 
                    placeholder="Enter address" 
                    onChange={(e) => setAddress(e.target.value)} />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            ) : (
                <section className="edit-section">
                <p>{name}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{address}</p>
                <button onClick={() => setEditMode(true)}>
                <i class="fa-regular fa-pen-to-square"></i> Edit</button>
              </section>

            )}
        </section>
    );
};

export default GeneralInfo