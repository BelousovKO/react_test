import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return <div className={'content'}>
        <img alt={'Картинка'}
            src={"https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"}/>
        <div className={s.posts}>
            <div className={s.item}>post 1</div>
            <div className={s.item}>post 2</div>
            <div className={s.item}>post 3</div>
        </div>
    </div>
}

export default Profile;