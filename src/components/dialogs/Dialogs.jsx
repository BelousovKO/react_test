import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Olga
                </div>
                <div className={s.dialog}>
                    Polina
                </div>
                <div className={s.dialog}>
                    Mihail
                </div>
                <div className={s.dialog}>
                    Max
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