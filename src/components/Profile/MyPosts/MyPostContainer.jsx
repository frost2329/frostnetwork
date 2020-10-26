import React from 'react';
import {AddPostActionCreater, UpdateTextPostActionCreater} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.Profile.posts,
        textNewPost: state.Profile.textNewPost
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost() {
            dispatch(AddPostActionCreater());
        },
        updatePost(message) {
            dispatch(UpdateTextPostActionCreater(message));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;