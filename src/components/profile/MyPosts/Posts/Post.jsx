import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.item_img}
                 alt={'Аватар'} src={'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'}/>
            {props.message}
            <div>
                <span>like <span>{props.likeCounts}</span></span>
            </div>
        </div>
    )
}

export default Post;