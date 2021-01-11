import React from "react";
import s from "./NewPost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redax/state";

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPostButton = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
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