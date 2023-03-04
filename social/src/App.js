import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter,  Routes} from 'react-router-dom';
import React from "react";


function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar friends={props.state.sidebar.friends} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='profile/*' element={<Profile addPost={props.addPost} posts={props.state.profilePage.posts} />} />
            <Route path='dialogs/*' element={<Dialogs sendMessage={props.sendMessage} dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>);
}

export default App;
