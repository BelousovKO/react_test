import React from "react";
import s from "./NewPost.module.css";

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPostButton = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
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