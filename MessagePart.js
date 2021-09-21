import React , { useState } from 'react';
import "./MessagePart.css";
import { Avatar } from '@material-ui/core';

function MessagePart() {
    
    const [input, setInput]= useState('');
    const [image, setImage]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setInput('');
        setImage('');
    };
    
    return (
        <div className="MessagePart">
            <div className="Message__top">
                <Avatar />
                <form>
                    <input  
                       value={input}
                       onChange={(e) => setInput(e.target.value)}
                    placeholder="what's on your mind" className="input__one"/>
                    <input 
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Upload Images" />
                    <button type="submit" onClick={handleSubmit}>Hidden Button</button>
                </form>
            </div>
            <div className="Message__bottom">
                <div className="Message__option">
                    
                    <h3>Like</h3>
                </div>
                <div className="Message__option">
                    
                    <h3>Dislike</h3>
                </div>
            </div>
        </div>
    )
}

export default MessagePart
