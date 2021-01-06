import React from "react";
import s from "./NewPost.module.css";

const NewPost = () => {
    return (
        <div className={s.newPost}>
            <h3>New post</h3>
            <div>
                <textarea className={s.textArea}></textarea>
                <button>Add post</button>
            </div>
        </div>
    )
}

export default NewPost;