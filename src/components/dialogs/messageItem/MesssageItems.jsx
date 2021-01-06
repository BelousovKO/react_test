import React from "react";
import s from './MessageItem.module.css';

const Message = (props) => {
    return (
        <div className={s.dialog}>
            <div className={s.person}>
                <div className={s.avatar}>
                    <img src={props.ava} alt={'avatar'}/>
                </div>
                <div className={s.personName}>
                    {props.name}
                </div>
            </div>
            <div className={s.message}>
                {props.message}
            </div>
        </div>
    )
}

export default Message;