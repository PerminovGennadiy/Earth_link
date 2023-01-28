import './App.css';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import MessagesContainer from '../components/Messages/MessagesContainer';
import FriendsContainer from '../components/Friends/FriendsContainer';
import MyProfileContainer from '../components/Profile/MyProfileContainer';
import HeaderContainer from '../components/Header/HeaderContainer';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { initializeApp } from '../redux/app-reducer';
import Preloader from '../UI/preloader/Preloader';
import PreloaderLarge from '../UI/preloader/PreloaderLarge';
import Welcome from '../components/Welcome/Welcome';
import NotFound from '../components/NotFound/NotFound';
import store from '../redux/redux-store';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
const News = React.lazy(() => import('../components/News/News'));
const Music = React.lazy(() => import('../components/Music/Music'));
const Settings = React.lazy(() => import('../components/News/News'));
const Login = React.lazy(() => import('../components/Login/Login'));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <PreloaderLarge />
        }

        return (
            <div className='app_wrapper'>
                <HeaderContainer />
                <Nav state={this.props.dialogsData} />
                <div className='main-content'>
                    <Suspense fallback={<div><Preloader /></div>}>
                        <Routes>
                            <Route path='/' element={<Welcome />} />
                            <Route path="/profile/:profileId?" element={<MyProfileContainer />} />
                            <Route path="/messages/*" element={<MessagesContainer />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/music" element={<Music />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/friends" element={<FriendsContainer />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </div>
                <Footer />
            </div>
        );
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

const mapStateToProps = (state) => ({
    dialogsData: state.messagesPage.dialogsData,
    initialized: state.app.initialized,
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const AppWithTest = (props) => {
    return <BrowserRouter>
    {/* return <HashRouter basename='/'> */}
    {/* return <BrowserRouter basename={process.env.PUBLIC_URL}> */}
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default AppWithTest;