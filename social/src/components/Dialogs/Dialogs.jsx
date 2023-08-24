import s from './Dialogs.module.css';
import React from "react";
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesContainer from './Message/MessageContainer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { connect } from 'react-redux';
import { compose } from 'redux';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsItem dialogs={props.store.getState().dialogsPage.dialogs} />
            <MessagesContainer store={props.store} />
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
)(Dialogs);