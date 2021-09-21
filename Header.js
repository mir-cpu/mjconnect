import React from 'react';
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
// import { Avatar } from '@material-ui/core';
import { Avatar , IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://i1.rgstatic.net/ii/institution.image/AS%3A267469380358150%401440781077782_l" alt=""/>
                
            
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Posts" />
                </div>
            </div>    

            <div className="header__middle">
                <div className="header__options header__options--active">
                    <HomeIcon  fontSize="large"/>
                </div>
                <div className="header__options">
                  <FlagIcon  fontSize="large"/>
                </div>
                <div className="header__options">
                  <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__options">
                  <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__options">
                  <SupervisedUserCircleOutlinedIcon fontSize="large"/>
                 </div>
                    
            </div>

            <div className="header__right">
               <div className="header__info">
               <Avatar />
                <h4>Mir Rahmathullah Imran</h4>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                </div> 
               
            </div>
        </div>
    )
}

export default Header;

