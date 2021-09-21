import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessagePart from './MessagePart';
import Post from './Post';
import acm from "./images/acm.png";
import { Avatar } from '@material-ui/core';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessagePart /> 


            <Post 
             profilePic={Avatar}
             username="imran"
             timestamp="this is a timestamp"
             message="this is a web app"
             image={acm} 

            />
            <Post />
            <Post />
            
        </div>
    )
}

export default Feed
