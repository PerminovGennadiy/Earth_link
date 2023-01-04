import cl from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={cl.wrapperImg}><img className={cl.background} src='https://t4.ftcdn.net/jpg/05/08/88/13/360_F_508881346_Y8NPkWuFIspsIucnv2mn43U8FcLxL3XB.jpg'></img></div>
            <div className={cl.profileInfo}>
                <div><img className={cl.avatar} src='https://cdn-icons-png.flaticon.com/512/147/147142.png'></img></div>
                <div className={cl.name}>Перминов Геннадий</div>
            </div>
        </div>
    );
};

export default ProfileInfo;