import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./messageItem/MesssageItems";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava}/>)
    let messageElements = props.state.messages.map(m => <Message message={m.message} ava={m.ava} name={m.name}/>)

    return (
        <div className={s.dialogs}>
            <div>
                {dialogElements}
            </div>
            <div className={s.dialogsContainer}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;