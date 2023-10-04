import s from './Dialogs.module.css';
import React from "react";
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesContainer from './Message/MessageContainer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AppStateType } from '../../redux/store';

type PropsType = {
    store: any
}

const Dialogs: React.FC<PropsType> = ({store}) => {
    return (
        <div className={s.dialogs}>
            <DialogsItem dialogs={store.getState().dialogsPage.dialogs} />
            <MessagesContainer store={store} />
        </div>
    );
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
)(Dialogs);