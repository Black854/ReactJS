import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes} from 'react-router-dom';
import React from "react";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import { connect } from 'react-redux';
import { initializeAppTC } from './redux/app-reducer';

class App extends React.Component {
  componentDidMount () {
    this.props.initializeAppTC();
  }
  
  render () {
    if (this.props.initialized === false) {
      return <Preloader />
    }
    return  <div className='app-wrapper'>
              <HeaderContainer />
              <Navbar friends={this.props.state.sidebar.friends} />
              <div className='app-wrapper-content'>
                <Routes>
                  <Route path='profile/:userId?' element={<ProfileContainer store={this.props.store} />} />
                  <Route path='dialogs/*' element={<Dialogs store={this.props.store} />} />
                  <Route path='users/*' element={<UsersContainer store={this.props.store} />} />
                  <Route path='login' element={<Login store={this.props.store} />} />
                </Routes>
              </div>
            </div>
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, {initializeAppTC}) (App);
