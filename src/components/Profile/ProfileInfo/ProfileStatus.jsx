import cl from './ProfileInfo.module.css';
import React, { useState, useEffect } from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        if (props.isOwner) {
            setEditMode(true);
        }
    }

    const deactivateEditMode = () => {
        if (props.isOwner) {
            setEditMode(false);
            props.updateStatus(status);
        }
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={cl.nameAboutMe}>
            <div className={cl.name}>{props.fullName}</div>
            {!editMode &&
                <div><span onDoubleClick={activateEditMode} className={cl.currentStatus}>{props.status || `User don't have a status`}</span></div>}
            {editMode &&
                <div><input value={status} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} className={cl.newStatus} /></div>}
        </div>
    )
}

export default ProfileStatusWithHooks;