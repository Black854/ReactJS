import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route, Routes} from 'react-router-dom';
import React, { lazy } from "react";
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import { connect } from 'react-redux';
import { initializeAppTC } from './redux/app-reducer';
import { compose } from 'redux';
import { withSuspense } from './hoc/withSuspense';
import { useEffect } from 'react';
let UsersContainer = lazy(() => import ('./components/Users/UsersContainer'));
let ProfileContainer = lazy(() => import ('./components/Profile/ProfileContainer'));
let Dialogs = lazy(() => import ('./components/Dialogs/Dialogs'));

export const App = (props) => {

  useEffect(() => {
    props.initializeAppTC()
  }, []);

  if (props.initialized === false) {
    return <Preloader />
  }
  return  <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar friends={props.state.sidebar.friends} />
            <div className='app-wrapper-content'>
              <Routes>
                <Route path='profile/:userId?' element={<ProfileContainer store={props.store} />} />
                <Route path='dialogs/*' element={<Dialogs store={props.store} />} />
                <Route path='users/*' element={<UsersContainer store={props.store} />} />
                <Route path='login' element={<Login store={props.store} />} />
              </Routes>
            </div>
          </div>
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(connect(mapStateToProps, {initializeAppTC}), withSuspense)(App);
