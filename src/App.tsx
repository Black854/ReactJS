import './App.css';
import { Route, Routes} from 'react-router-dom';
import React, { ComponentType, lazy } from "react";
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import { connect } from 'react-redux'
import { initializeAppTC } from './redux/app-reducer'
import { compose } from 'redux'
import { withSuspense } from './hoc/withSuspense'
import { useEffect } from 'react'
import { AppStateType } from './redux/store'
import { Layout, theme } from 'antd';
import Header from './components/Header/Header';
let UsersContainer = lazy(() => import ('./components/Users/UsersContainer') as Promise<{ default: ComponentType<any> }>)
let ProfileContainer = lazy(() => import ('./components/Profile/ProfileContainer') as Promise<{ default: ComponentType<any> }>)
let Dialogs = lazy(() => import ('./components/Dialogs/Dialogs') as Promise<{ default: ComponentType<any> }>)

type MapStatePropsType = {
  initialized: boolean
}

type MapDispatchPropsType = {
  initializeAppTC: () => void
}

type OwnPropsType = {
  store: any
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

export const App: React.FC<PropsType> = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const { Content, Footer, Sider } = Layout;

  useEffect(() => {
    props.initializeAppTC()
  }, []);

  if (props.initialized === false) {
    return <Preloader />
  }
  return  <Layout>
            <Header />
            <Content style={{ padding: '0 50px' }}>
              <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                <Navbar />
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                  <Routes>
                    <Route path='profile/:userId?' element={<ProfileContainer store={props.store} />} />
                    <Route path='dialogs/*' element={<Dialogs store={props.store} />} />
                    <Route path='users/*' element={<UsersContainer store={props.store} />} />
                    <Route path='login' element={<Login store={props.store} />} />
                  </Routes>
                </Content>
              </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>React Way of Samurai ©2023 Created by Kirill Ch.</Footer>
          </Layout>
}

const mapStateToProps = (state: AppStateType) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {initializeAppTC}), withSuspense)(App);
