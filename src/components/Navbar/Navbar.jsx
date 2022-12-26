import { NavLink } from 'react-router-dom';
import cl from '../Navbar/Navbar.module.css';
import FriendsList from './FriendsList/FriendsList';

const Nav = (props) => {
    return (
        <nav className={cl.nav}>
            <div className={cl.navOption}><NavLink to='/profile' className = { navData => navData.isActive ? cl.active : cl.item }>Profile</NavLink></div>
            <div className={cl.navOption}><NavLink to='/messages' className = { navData => navData.isActive ? cl.active : cl.item }>Messages</NavLink></div>
            <div className={cl.navOption}><NavLink to='/news' className = { navData => navData.isActive ? cl.active : cl.item }>News</NavLink></div>
            <div className={cl.navOption}><NavLink to='/music' className = { navData => navData.isActive ? cl.active : cl.item }>Music</NavLink></div>
            <div className={`${cl.navOption} ${cl.last}`}><NavLink to='/settings' className = { navData => navData.isActive ? cl.active : cl.item }>Settings</NavLink></div>
            <div className={cl.navOption}><NavLink to='/friends' className = { navData => navData.isActive ? cl.active : cl.item }>Friends</NavLink></div>
            <FriendsList />
        </nav>
    );
};

export default Nav;