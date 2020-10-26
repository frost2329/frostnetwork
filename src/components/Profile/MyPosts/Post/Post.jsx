import React from 'react';
import s from './Post.module.css'
const Post = (props) => {
    return (
            <div className={s.item}>
                <img src={props.avatarUrl} />
                <div>
                    <p>
                        {props.message}
                    </p>
                    {props.likes} Like
                </div>
            </div>
    )
}
export default Post;