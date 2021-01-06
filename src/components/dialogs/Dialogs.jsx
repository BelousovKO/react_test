import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./messageItem/MesssageItems";

const Dialogs = (props) => {

    let dialogs = props.dialogs;
    let messages = props.messages;

    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;