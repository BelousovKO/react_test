import React from "react";
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import NewPost from "./Posts/NewPost";

const MyPosts = (props) => {

    let posts = props.posts;

    let postsElement = posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    return (
        <div>
            <NewPost/>
            { postsElement }
        </div>
    )
}

export default MyPosts;