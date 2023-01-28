import cl from '../Footer/Footer.module.css';
import logo from '../../assets/images/logo.png';
import vk from '../../assets/svg/vk.svg';
import instagram from '../../assets/svg/instagram.svg';
import youtube from '../../assets/svg/youtube.svg';
import React from 'react';

const Footer = () => {
    return (
        <div className={cl.footer}>
            <div className={cl.container}>
                <div className={`${cl.footer_div} ${cl.logo_container}`}>
                    <img className={cl.logo} src={logo} alt="" />
                    <p className={cl.a}>(c) Все права защищены</p>
                </div>
                <div className={cl.footer_div}>
                    <ul>
                        <li>Навигация</li>
                        <li>Меню</li>
                        <li>О нас</li>
                        <li>Акции</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className={`${cl.footer_div} ${cl.footer_contacts}`}>
                    <ul>
                        <li>Контакты</li>
                        <li><p>Наш адрес</p></li>
                        <li>Москва, Манежная пл., строение 2</li>
                        <li><p>Режим работы</p></li>
                        <li>Для вас - в любое время <div className={cl.heart}>💙</div></li>
                    </ul>
                </div>
                <div className={`${cl.footer_div} ${cl.connect_container}`}>
                    <div className={cl.number}>8-800-555-35-35</div>
                    <div className={cl.number}>8-800-555-35-35</div>
                    <div>Мы в соц сетях:</div>
                    <div className={cl.seti_container}>
                        <div><img className={cl.seti} src={vk} alt="" /></div>
                        <div><img className={cl.seti} src={instagram} alt="" /></div>
                        <div><img className={`${cl.seti} ${cl.youtube}`} src={youtube} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;