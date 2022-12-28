import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Messages from './components/Navbar/Messages/Messages';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import MyProfile from './components/Navbar/Profile/MyProfile';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import Settings from './components/Navbar/Settings/Settings';
import Footer from './components/Footer/Footer';
import Friends from './components/Navbar/Friends/Friends';
import FriendsList from './components/Navbar/FriendsList/FriendsList';

function App(props) {

    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header />
                <Nav state={props.state.messagesPage.dialogsData} />
                <div className='main-content'>
                    <Routes>
                        <Route path="/profile" element={<MyProfile
                            posts={props.state.profilePage}
                            addPost={props.addPost}
                            updatePostText={props.updatePostText} />} />
                        <Route path="/messages/*" element={<Messages state={props.state.messagesPage} />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/friends" element={<Friends />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
