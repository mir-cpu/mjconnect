import React from 'react';
import "./Story.css";

function Story({image,title}) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="story">
            <h4>{title}</h4>
        </div>
    
    )
}

export default Story
