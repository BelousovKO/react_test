import React from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import NewPost from "./Posts/NewPost";

const MyPosts = () => {
    return (
        <div>
            <NewPost/>
            <Post message='Hi, how are you?' likeCounts="15"/>
            <Post message='It"s my first post' likeCounts="20"/>
            <Post message='My name is Wasily' likeCounts="5"/>
        </div>
    )
}

export default MyPosts;