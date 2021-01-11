import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.item_img}
                 alt={'Аватар'}
                 src={'https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg'}/>
            <span className={s.postText}>{props.message}</span>
            <div>
                <span>like <span>{props.likeCounts}</span></span>
            </div>
        </div>
    )
}

export default Post;