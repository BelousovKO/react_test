import React from "react";
import s from './NewMessage.module.css';

const NewMessage = () => {

    let newMessageElement = React.createRef();

    let addMessageButton = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.newMessage}>
            <div className={s.titleAddNewMessage}>To write a message</div>
            <div>
                <textarea className={s.textArea} ref={newMessageElement}/>
                <button className={s.newMessageButton} onClick={addMessageButton}>Add new message</button>
            </div>
        </div>
    )
}

export default NewMessage;