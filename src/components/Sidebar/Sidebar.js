import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import coverPhoto from '../../images/keyboard.jpg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src={coverPhoto} alt="" />
                <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
                <h4>{user.displayName}</h4>
                <p>{user.email}</p>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">74</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views of your post</p>
                    <p className="sidebar__statNumber">416</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('React js')}
                {recentItem('Javascript')}
                {recentItem('Programming')}
                {recentItem('Developer')}
                {recentItem('Front End')}
            </div>
        </div>
    );
}

export default Sidebar;