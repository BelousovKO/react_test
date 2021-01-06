import React from "react";
import s from './Friend.module.css';

const Friend = (props) => {

    return (
        <div className={s.friend}>
            <div>
            <img src={props.ava} alt={'avatar'}/>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default Friend;