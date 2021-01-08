import React from "react";
import s from "./NewPost.module.css";

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPostButton = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }
    return (
        <div className={s.newPost}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onPostChange}
                          className={s.textArea}
                          ref={newPostElement}
                          value={props.newPostText}/>
                <button onClick={addPostButton}>Add post</button>
            </div>
        </div>
    )
}

export default NewPost;