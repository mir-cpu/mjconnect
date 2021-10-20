import React from 'react';
import "./StoryReel.css";
import Story from "./Story";
import acm from "./images/acm.png";
import mss from "./images/msspic.png";
import paper from "./images/paper.png";
import AR from "./images/AR.jpg";
import mj from "./images/mj.jpg";


function StoryReel() {
    return (
        <div className="storyreel">
            <Story image={acm} 
            title="ACM MJCET"/> 
             <Story image={mss}
                title="MSS MJCET" /> 
            <Story  image={paper}
               title="Paper Presentation"/> 
            <Story image={AR}
              title="IEEE MJCET"/> 
            <Story image={mj}
            title="Muffakham Jah College Of Engg and Tech"/>  

        </div>
    )
}

export default StoryReel
