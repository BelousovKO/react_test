import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./messageItem/MesssageItems";

const Dialogs = (props) => {

    let dialogs =
        [
            {id: 1, name: 'Olga'},
            {id: 2, name: 'Polina'},
            {id: 3, name: 'Mihail'},
            {id: 4, name: 'Max'}
        ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Bi'},
        {id: 4, message: 'Wou'}
    ]

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