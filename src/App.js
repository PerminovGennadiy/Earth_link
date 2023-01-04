import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import MyProfile from './components/Navbar/Profile/MyProfile';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import Settings from './components/Navbar/Settings/Settings';
import Footer from './components/Footer/Footer';
import Friends from './components/Navbar/Friends/Friends';
import MessagesContainer from './components/Navbar/Messages/MessagesContainer';
import { Provider } from 'react-redux';

function App(props) {
    return (
        <BrowserRouter>
            <Provider store={props.store}>
                <div className='app_wrapper'>
                    <Header />
                    <Nav state={props.state.messagesPage.dialogsData} />
                    <div className='main-content'>
                        <Routes>
                            <Route path="/profile" element={<MyProfile />} />

                            <Route path="/messages/*" element={<MessagesContainer
                                store={props.store} />} />

                            <Route path="/news" element={<News />} />

                            <Route path="/music" element={<Music />} />

                            <Route path="/settings" element={<Settings />} />

                            <Route path="/friends" element={<Friends />} />
                            Z
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
