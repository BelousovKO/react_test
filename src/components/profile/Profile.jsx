import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <div>
        <img className={s.profile_img}
            alt={'Картинка'}
             src={"https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"}/>
        <MyPosts/>
    </div>
    )
}

export default Profile;