import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='1'>Карина</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='2'>Сижик</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='3'>Арсик</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='4'>Систр</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div>Hi</div>
                <div>How are you</div>
                <div>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;