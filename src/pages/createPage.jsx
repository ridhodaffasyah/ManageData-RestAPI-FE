import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function CreatePage() {

    const [name, setName] = useState('');
    const [job_title, setJob_title] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [country, setCountry] = useState('');
    const [status, setStatus] = useState(true);

    const addCustomer = async () => {
        await axios.post('https://mitramas-test.herokuapp.com/customers', {
            name,
            job_title,
            address,
            phone_number,
            country,
            status
        }, {
            headers: {
                Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU0NDk0ODYwLCJleHAiOjE2NTQ0OTg0NjAsIm5iZiI6MTY1NDQ5NDg2MCwianRpIjoiUVpKemhXMmlUOEVRc2JXSCIsInN1YiI6MTU2LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.QbuPxXV2wQRdJpfTICmEAugeaBpzFPDZKHHGA7SIcjo'
            }
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="create-page">
            <h1>Create Page</h1>
            <form className="form" id="form" method="post">
                    <p className="label">Customer Name</p>
                    <input className="input" type="text" id="name" name="name" placeholder="Enter customer name" onInput={(e) => setName(e.target.value)}/>
                    <p className="label">Address</p>
                    <textarea name="address" id="address" className="textarea"
                        placeholder="Enter Address" onInput={(e) => setAddress(e.target.value)}></textarea>
                    <p className="label">Country</p>
                    <input className="input" type="text" id="country" name="country" placeholder="Enter Country" onInput={(e) => setCountry(e.target.value)}/>
                    <p className="label">Phone Number</p>
                    <input className="input" type="text" id="phone_number" name="phone_number" placeholder="Enter Phone Number" onInput={(e) => setPhone_number(e.target.value)}/>
                    <p className="label">Job Title</p>
                    <input className="input" type="text" id="job_title" name="job_title" placeholder="Enter Job Title" onInput={(e) => setJob_title(e.target.value)}/>
                    <p className="label">Status</p>
                    <select name="status" id="status" className="dropdown" onInput={(e) => setStatus(e.target.value)}>
                        <option value="" disabled selected hidden>Choose Status</option>
                        <option className="option" value="true">true</option>
                        <option className="option" value="false">false</option>
                    </select>
            </form>
                <button className="button" type="submit" id="btn" name="submit" onClick={addCustomer}>
                    Submit
                </button>
        </div>
    );
}

export default CreatePage;