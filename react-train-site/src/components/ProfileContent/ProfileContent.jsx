import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const ProfileContent = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            </div>
            <div>
                <MyPostsContainer />
            </div>
        </div>
    );
};

export default ProfileContent;
