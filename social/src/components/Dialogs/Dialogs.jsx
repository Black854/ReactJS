import s from './Dialogs.module.css';
import React from "react";
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesContainer from './Message/MessageContainer';
import { Navigate } from 'react-router-dom';


const Dialogs = (props) => {
    let isAuth = props.store.getState().auth.isAuth;
    if (!isAuth) { return <Navigate to='/login' />}
    return (
        <div className={s.dialogs}>
            <DialogsItem dialogs={props.store.getState().dialogsPage.dialogs} />
            <MessagesContainer store={props.store} />
        </div>
    );
}

export default Dialogs;