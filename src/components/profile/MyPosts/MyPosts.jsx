import React from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import NewPost from "./Posts/NewPost";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likeCounts: 15},
        {id: 2, message: 'It"s my first post', likeCounts: 20},
        {id: 3, message: 'My name is Wasily', likeCounts: 5},
    ]

    let postsElement = posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    return (
        <div>
            <NewPost/>
            { postsElement }
        </div>
    )
}

export default MyPosts;