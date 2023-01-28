import React from "react";
import cl from './Welcome.module.css';
import telegram from '../../assets/svg/telegram.svg';
import vk from '../../assets/svg/vk.svg';
import github from '../../assets/svg/github.svg';

const Welcome = (props) => {
    return (
        <div className={cl.container}>
            <h2>Здравствуйте! Это мой pet-проект на react.</h2>
            <div className={cl.text}> Это соцсеть, в которой можно вести свой блог, переписываться с друзьями и делать привычные вам вещи.
                Возможно, при вашем посещении этого сайта, не все функции будут работать, но я старательно делаю всё, чтобы
                эти возможности появились.
                <br />
                Со временем я буду дополнять различные функции, чтобы вы были довольны при его
                повторном посещении!
                <h3>Важно!</h3>
                Если вы хотите войти в аккаунт на сайте, то можете использовать тестовые данные:
                <div style={{fontWeight: '700', padding: '10px 0'}}>Email: free@samuraijs.com</div>
                <div style={{fontWeight: '700', paddingBottom: '10px'}}>Password: free</div>
                Либо вы можете зарегистрироваться на этом сайте: <a className={cl.linkToSite} target='_blank' href="https://social-network.samuraijs.com/signUp" >Здесь</a> <br />
                Это связано с тем, что на этом сайте логинизация происходит через API другого сайта <br />
                Ссылка на Api документацию: <a className={cl.linkToSite} target='_blank' href="https://social-network.samuraijs.com/docs">Ссылка</a>
                <div className={cl.contacts}>
                    Мои контакты:
                    <ul className={cl.link_container}>
                        <li><a target='_blank' href="https://t.me/Perminov_Gennadiy"><img className={cl.link} src={telegram} />Телеграм</a></li>
                        <li><a target='_blank' href="https://github.com/PerminovGennadiy"><img className={cl.link} src={github} />GitHub</a></li>
                        <li><a target='_blank' href="https://vk.com/genysik1337"><img className={cl.link} src={vk} />Вконтакте</a></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Welcome;