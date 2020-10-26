import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let elementPosts = props.posts
        .map(p => <Post message={p.message} id={p.id} likes={p.likes} avatarUrl={p.avatarUrl}/>);

    let addPost = () => {
        props.addPost();
    }

    let updatePost = (event) => {
        let message = event.target.value;
        props.updatePost(message);
    }


    return (
        <div>
            <h3>Мои посты</h3>

            <div className={s.newPost}>
                <div>
                    <textarea onChange={updatePost}  value={props.textNewPost} placeholder="Enter your post"/>
                </div>
                <div>
                    <button onClick={addPost}>
                        Add post
                    </button>
                </div>
            </div>
            {elementPosts}
        </div>
    )
}

export default MyPosts;