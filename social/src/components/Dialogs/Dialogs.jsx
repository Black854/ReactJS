import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>Карина</div>
                <div className={s.dialog}>Сижик</div>
                <div className={s.dialog}>Арсик</div>
                <div className={s.dialog}>Систр</div>
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