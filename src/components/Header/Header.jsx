import { Route, Routes,  } from 'react-router-dom';
import cl from '../Header/Header.module.css';
import Settings from '../Navbar/Settings/Settings';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.logoBrand}>
                <div><img className={cl.logo} src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMzViYXRjaDYtbm9vbi0yNF8xLnBuZw.png" alt="" /></div>
                <NavLink to='/' className={cl.brand}>Earth link</NavLink>
            </div>
                
            <NavLink to='/settings' className={cl.settings}>Settings</NavLink>
        </header>
    );
};

export default Header;