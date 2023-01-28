import React, { useState, useEffect } from "react";
import ProfileDataForm from "./ProfileDataForm";
import cl from './ProfileInfo.module.css';
import PreloaderLarge from '../../../UI/preloader/PreloaderLarge.jsx';
import AvatarNotSelected from '../../../assets/images/AvatarNotSelected.png';
import ProfileStatusWithHooks from './ProfileStatus';
import galochka from '../../../assets/images/galochka.png';
import krest from '../../../assets/images/krest.png';
import facebook from '../../../assets/svg/facebook.svg';
import github from '../../../assets/svg/github.svg';
import instagram from '../../../assets/svg/instagram.svg';
import mainLink from '../../../assets/svg/mainLink.svg';
import twitter from '../../../assets/svg/twitter.svg';
import vk from '../../../assets/svg/vk.svg';
import website from '../../../assets/svg/website.svg';
import youtube from '../../../assets/svg/youtube.svg';

const images = {
    "facebook": facebook,
    "github": github,
    "instagram": instagram,
    'mainLink': mainLink,
    'twitter': twitter,
    'vk': vk,
    'website': website,
    'youtube': youtube,
}

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <PreloaderLarge />
    }

    let [editMode, setEditMode] = useState(false);


    const onMainPhotoSelected = (e) => {
        if (e.target.files[0]) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = async (formData) => {
        await props.saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }

    return (
        <div>
            <div className={cl.wrapperImg}>
                <img className={cl.background} src='https://t4.ftcdn.net/jpg/05/08/88/13/360_F_508881346_Y8NPkWuFIspsIucnv2mn43U8FcLxL3XB.jpg'></img>
            </div>
            <div className={cl.profileInfo}>
                <div className={cl.avatarContainer}>
                    <img className={cl.avatar} src={props.profile.photos.large || props.profile.photos.small || AvatarNotSelected} />
                    {props.isOwner &&
                        <form>
                            <div className={cl.upload_file__wrapper}>
                                <input onChange={onMainPhotoSelected} type="file" name="files[]" id="upload-file__input_1" className={cl.upload_file__input} accept=".jpg, .jpeg, .png"
                                />
                                <label className={cl.upload_file__label} for="upload-file__input_1">
                                    <svg className={cl.upload_file__icon} viewBox="0 0 512 512">
                                        <path d="M286 384h-80c-14.2 1-23-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c11.6 11.6 3.7 33.1-13.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-23-23V366c0-13.3 10.7-24 24-24h136v8c0 31 24.3 56 56 56h80c30.9 0 55-26.1 57-55v-8h135c13.3 0 24 10.6 24 24zm-124 88c0-11-9-20-19-20s-19 9-20 20 9 19 20 20 21-9 20-20zm64 0c0-12-9-20-20-20s-20 9-19 20 9 20 20 20 21-9 20-20z"></path>
                                    </svg>
                                </label>
                            </div>
                        </form>
                    }
                </div>
                <ProfileStatusWithHooks isOwner={props.isOwner} fullName={props.profile.fullName} status={props.status} updateStatus={props.updateStatus} />
            </div>
            {editMode
                ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile} />
                : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => { setEditMode(true) }} />}
        </div>
    );
};

const ProfileData = (props) => {
    return (
        <div className={cl.jobContainer}>
            {props.isOwner && <div className={`${cl.formButtonSubmitContainer} ${cl.formButtonChangeContainer}`}><button onClick={props.goToEditMode}>Изменить</button></div>}
            <div className={cl.readyForJob}>
                <div className={cl.lookingForAJob}>Находиться ли пользователь в поиске работы:⠀
                    <img className={cl.lookingForAJobImg} src={props.profile.lookingForAJob === true ? galochka : krest} />
                </div>
                <div className={cl.lookingForAJobDescription}>
                    {!props.profile.lookingForAJobDescription ? "Пользователь не находится в поиске работы" : props.profile.lookingForAJobDescription}
                </div>
            </div>
            <div className={cl.contacts}>
                {Object.keys(props.profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

const Contacts = ({ contactTitle, contactValue }) => {
    {
        if (contactValue != null) {
            return (
                <div className={cl.socialContainer}>
                    <a className={`${cl.social}`} href={contactValue}>
                        <img className={cl.contactImg} src={images[contactTitle]} />
                        {contactTitle}
                    </a>
                </div>
            )
        }
    }
}

export default ProfileInfo;