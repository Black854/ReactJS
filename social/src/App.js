import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes} from 'react-router-dom';
import React from "react";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';


function App(props) {
  return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar friends={props.state.sidebar.friends} />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='profile/:userId?' element={<ProfileContainer store={props.store} />} />
              <Route path='dialogs/*' element={<Dialogs store={props.store} isAuth={props.store.getState().auth.isAuth} />} />
              <Route path='users/*' element={<UsersContainer store={props.store} />} />
              <Route path='login' element={<Login store={props.store} />} />
            </Routes>
          </div>
        </div>
  )
}

export default App;
