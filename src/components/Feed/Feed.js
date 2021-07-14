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

function Feed() {
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
            name: 'Mohammad Tasib',
            description: 'Front End Developer [Javascript, React, Redux]',
            message: input,
            photoUrl: '',
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
        </div>
    );
}

export default Feed;