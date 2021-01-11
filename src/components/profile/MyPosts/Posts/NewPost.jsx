import React from "react";
import s from "./NewPost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redax/state";

const NewPost = (props) => {

    let addPostButton = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.newPost}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onPostChange}
                          placeholder={'Enter your post'}
                          className={s.textArea}
                          value={props.newPostText}/>
                <button onClick={addPostButton}>Add post</button>
            </div>
        </div>
    )
}

export default NewPost;