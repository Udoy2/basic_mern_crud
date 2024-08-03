import React, { useState } from 'react'
import postService from '../services/postService';

function CreateComponent() {
    const [titile, setTitile] = useState("");
    const [date, setDate] = useState('')
    const [image, setImage] = useState('')
    const [message, setMessage] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title',titile);
        formData.append('date',date);
        formData.append('image',image);
        const response = await postService.create(formData)
        console.log(response);
        
        event.target.reset()
    }
    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="title" 
                id="titile" 
                placeholder='Enter Post Title'
                onChange={event => setTitile(event.target.value)}
                required
                 />
                 <br />
                <input 
                type="date" 
                name="date" 
                id="date" 
                placeholder='Enter Post Date'
                onChange={event => setDate(event.target.value)}
                required
                 />
                 <br />

                 <input 
                type="file" 
                name="image" 
                id="image" 
                placeholder='Enter Post Image'
                onChange={event => setImage(event.target.files[0])}
                required
                 />
                 <br />
                <input type='submit' value='submit' />
                <p>{message}</p>
            </form>
        </div>
    )
}

export default CreateComponent