import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
// import {Avatar} from '@material-ui/core';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { AnnouncementOutlined } from '@material-ui/icons';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="" title="Mir Rahmathullah Imran"/>
            <SidebarRow Icon={LibraryBooksIcon} title="Resources" />
            <SidebarRow Icon={AnnouncementOutlined} title="CollegeNews"/>
            <SidebarRow Icon={ChatOutlinedIcon} title="Blogs"/>
            <SidebarRow  Icon={SchoolOutlinedIcon} title="Research"/>
            
        </div>
    )
}

export default Sidebar
