import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter,  Routes} from 'react-router-dom';
import React from "react";

let state = {
  profilePage: {
    posts: [
      {id: 1, postText: 'Hi bro', likesCount: 1},
      {id: 2, postText: 'How are you?', likesCount: 0},
      {id: 3, postText: 'Bro?', likesCount: 2}
    ]
  },
  
  dialogsPage: {
    dialogs: [
      { id: '1', name: 'Карина' },
      { id: '2', name: 'Сижик' },
      { id: '3', name: 'Арсик' },
      { id: '4', name: 'Систр' },
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Helloo' }
    ]
  }
}

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='profile/*' element={<Profile posts={state.profilePage.posts} />} />
            <Route path='dialogs/*' element={<Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>);
}

export default App;
