import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes} from 'react-router-dom';
import React from "react";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


function App(props) {
  return (
        <div className='app-wrapper'>
          <Header />
          <Navbar friends={props.state.sidebar.friends} />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='profile/:userId?' element={<ProfileContainer store={props.store} />} />
              <Route path='dialogs/*' element={<Dialogs store={props.store} />} />
              <Route path='users/*' element={<UsersContainer store={props.store} />} />
            </Routes>
          </div>
        </div>
  )
}

export default App;
