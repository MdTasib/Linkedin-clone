import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import InputOption from '../InputOption/InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray' />
                <InputOption Icon={CommentOutlinedIcon} title='Comment' color='gray' />
                <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
                <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
            </div>
        </div>
    );
}

export default Post;