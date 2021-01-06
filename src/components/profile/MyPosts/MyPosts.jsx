import React from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import NewPost from "./Posts/NewPost";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likeCounts: 15},
        {id: 2, message: 'It"s my first post', likeCounts: 20},
        {id: 3, message: 'My name is Wasily', likeCounts: 5},
    ]
    return (
        <div>
            <NewPost/>
            <Post message={postData[0].message} likeCounts={postData[0].likeCounts}/>
            <Post message={postData[1].message} likeCounts={postData[1].likeCounts}/>
            <Post message={postData[2].message} likeCounts={postData[2].likeCounts}/>
        </div>
    )
}

export default MyPosts;