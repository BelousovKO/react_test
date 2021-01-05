import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={'/dialogs/1'}>
                    Olga
                      </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}>
                    Polina
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}>
                    Mihail
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}>
                    Max
                    </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    Bi
                </div>
            </div>
        </div>
    )
}

export default Dialogs;