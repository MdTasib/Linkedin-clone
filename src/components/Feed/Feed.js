import React from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from '../InputOption/InputOption';
import PanoramaIcon from '@material-ui/icons/Panorama';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';

function Feed() {
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" placeholder='Start a post' />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={PanoramaIcon} title='Photo' color='#70b5f9' />
                    <InputOption Icon={YouTubeIcon} title='Video' color='#7fc15e' />
                    <InputOption Icon={EventNoteIcon} title='Event' color='#e7a33e' />
                    <InputOption Icon={VerticalSplitIcon} title='Write article' color='#fc9295' />
                </div>
            </div>
        </div>
    );
}

export default Feed;