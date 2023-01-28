import React from "react";
import cl from './ProfileInfo.module.css';
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
import { createField, Input, Textarea } from "../../../UI/FormsControl/FormsControl";
import { reduxForm } from "redux-form";

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

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form className={cl.formContainer} onSubmit={handleSubmit}>
            <div>

                <div className={cl.formButtonSubmitContainer}><button>Сохранить</button></div>


                {error && <div className={cl.errorMessage}>{error}</div>}

                <div>
                    <b>Ваше имя:</b> {createField('Введите ваше имя', 'fullName', [], Input, {}, '', 'newForm')}
                </div>

                <div>
                    <b>Ищете ли вы работу?</b>
                    {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' }, '', 'newLookingForAJobCheckbox')}
                </div>

                <div>
                    <b>Ваши навыки:</b>
                    {createField('Введите сюда ваши навыки', 'lookingForAJobDescription', [], Textarea, {}, '', 'newSkills')}
                </div>
            </div>
            <div className={cl.newLinksContainer}>
                {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key}>
                            {key}: {createField(key , `contacts.${key}`, [], Input, {}, '', 'newLinks')}
                        </div>
                    )
                })}
            </div>
        </form>
    )
}

const ProfileDataFormContainer = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormContainer;