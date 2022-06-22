import styles from "./ProfileInfo.module.css";
import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/EwNMk9MUcAE20aq.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />;
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData);
    };

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img alt="kek" src={profile.photos.large || userPhoto} />
                {isOwner && <input tyfe={"file"} onChange={onMainPhotoSelected} />}
                <ProfileData profile={profile} />
                {editMode ? (
                    <ProfileDataForm profile={profile} onSubmit={onSubmit} />
                ) : (
                    <ProfileData
                        goToEditMode={() => {
                            setEditMode(true);
                        }}
                        profile={profile}
                        isOwner={isOwner}
                    />
                )}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && (
                <div>
                    <button onClick={goToEditMode}>edit</button>
                </div>
            )}
            <div>
                <b>Full name</b>:{profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>:{profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob && (
                <div>
                    <b>My proffesional skills</b>:{profile.lookingForAJobDescription}
                </div>
            )}
            <div>
                <b>About me</b>:{profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>:
                {Object.keys(profile.contacts).map((key) => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />;
                })}
            </div>
        </div>
    );
};

export const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}</b>:{contactValue}
        </div>
    );
};

export default ProfileInfo;
