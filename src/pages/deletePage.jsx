import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function DeletePage() {

    const [id, setId] = useState(0);

    const deleteData = async () => {
        await axios.delete('/customers/', {id}, {
            headers: {
                Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU0NDk3NDQ2LCJleHAiOjE2NTQ1MDEwNDYsIm5iZiI6MTY1NDQ5NzQ0NiwianRpIjoiRldYY0Y2VkNoQlN6cGZXZSIsInN1YiI6MTU2LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.tBV9LBp-UHInN6xpR__csKyWa7Bg6YsbNqWHjpdkUC0'
            }
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="create-page">
            <h1>Update Page</h1>
            <form className="form" id="form" method="post">
                <p className="label">Customer ID</p>
                <input className="input" type="text" id="id" name="id" placeholder="Enter customer Id" onInput={(e) => setId(e.target.value)}/>
            </form>
            <button className="button" type="submit" id="btn" name="submit" onClick={deleteData}>
                Submit
            </button>
        </div>
    );
}

export default DeletePage;

