import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.profile_img}
                 alt={'Картинка'}
                 src={"https://wikiway.com/upload/hl-photo/930/a01/teatr_operi_i_baleta_v_novosibirske_14.jpg"}/>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;