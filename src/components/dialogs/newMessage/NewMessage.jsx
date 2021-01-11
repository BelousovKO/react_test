import React from "react";
import s from './NewMessage.module.css';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redax/state";

const NewMessage = (props) => {

    let newMessageElement = React.createRef();

    let addMessageButton = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={s.newMessage}>
            <div className={s.titleAddNewMessage}>To write a message</div>
            <div>
                <textarea className={s.textArea}
                          onChange={onMessageChange}
                          ref={newMessageElement}
                          value={props.newMessageText}/>
                <button className={s.newMessageButton} onClick={addMessageButton}>Add new message</button>
            </div>
        </div>
    )
}

export default NewMessage;