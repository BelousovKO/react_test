import React from "react";
import s from "./NewPost.module.css";

const NewPost = () => {

    let newPostElement = React.createRef();

    let addPostButton = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div className={s.newPost}>
            <h3>My post</h3>
            <div>
                <textarea className={s.textArea} ref={newPostElement}/>
                <button onClick={addPostButton}>Add post</button>
            </div>
        </div>
    )
}

export default NewPost;