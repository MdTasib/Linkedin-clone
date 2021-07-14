import React, { useState, useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from '../InputOption/InputOption';
import PanoramaIcon from '@material-ui/icons/Panorama';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import Post from '../Post/Post';
import { db } from '../../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            ))
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || user?.email[0],
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput('');
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Start a post' />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={PanoramaIcon} title='Photo' color='#70b5f9' />
                    <InputOption Icon={YouTubeIcon} title='Video' color='#7fc15e' />
                    <InputOption Icon={EventNoteIcon} title='Event' color='#e7a33e' />
                    <InputOption Icon={VerticalSplitIcon} title='Write article' color='#fc9295' />
                </div>
            </div>

            <FlipMove>
                {
                    posts.map(({ id, data: { name, description, photoUrl, message } }) => (
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                        />
                    ))
                }
            </FlipMove>
        </div>
    );
}

export default Feed;