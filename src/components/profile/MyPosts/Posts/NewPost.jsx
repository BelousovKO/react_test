import React from "react";
import s from "./NewPost.module.css";

const NewPost = () => {
    return (
        <div className={s.newPost}>
            New post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
        </div>
    )
}

export default NewPost;