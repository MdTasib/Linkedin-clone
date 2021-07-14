import React, { useState } from 'react';
import linkedin from '../../images/svg/linkedin01.svg';
import './Login.css';
import firebase from 'firebase';
import { login } from '../../features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [profileUrl, setProfileUrl] = useState('');
    const dispatch = useDispatch();

    const loginToApp = e => {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        profileUrl: userAuth.user.photoURL,
                    })
                )
            })
            .catch(error => alert(error));
    }

    const register = () => {
        if (!name) {
            return alert('Please enter a full name');
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(userAuth => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profileUrl,
                    })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profileUrl,
                        }))
                    })
            }).catch(error => alert(error));
    };

    return (
        <div className='login'>
            <img src={linkedin} alt="" />
            <div className="line">
                <div className="inner"></div>
            </div>

            <form>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='Your Full Name'
                    type="text"
                />
                <input
                    value={profileUrl}
                    onChange={e => setProfileUrl(e.target.value)}
                    placeholder='Your Profile URL'
                    type="text"
                />
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Your Email'
                    type="email"
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Your Password'
                    type="password"
                />
                <button type='submit' onClick={loginToApp}>Sing In</button>
            </form>

            <p>
                Not a member?
                <span className='login__register' onClick={register}> Register Now</span>
            </p>
        </div>
    );
}

export default Login;