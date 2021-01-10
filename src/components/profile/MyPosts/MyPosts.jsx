import React from "react";
// import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import NewPost from "./Posts/NewPost";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    return (
        <div>
            <NewPost newPostText={props.newPostText}
                     dispatch={props.dispatch}/>
            {postsElement}
        </div>
    )
}

export default MyPosts;