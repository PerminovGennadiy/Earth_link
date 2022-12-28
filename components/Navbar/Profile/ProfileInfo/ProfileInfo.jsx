import cl from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={cl.wrapperImg}><img className={cl.background} src='https://oboi-telefon.ru/wallpapers/6095/31747.jpg'></img></div>
            <div className={cl.profileInfo}>
                <div><img className={cl.avatar} src='https://cdn-icons-png.flaticon.com/512/147/147142.png'></img></div>
                <div className={cl.name}>Перминов Геннадий</div>
            </div>
        </div>
    );
};

export default ProfileInfo;