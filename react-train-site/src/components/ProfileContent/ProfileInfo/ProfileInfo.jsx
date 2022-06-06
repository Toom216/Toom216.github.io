import styles from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Wildschwein%2C_N%C3%A4he_Pulverstampftor_%28cropped%29.jpg/800px-Wildschwein%2C_N%C3%A4he_Pulverstampftor_%28cropped%29.jpg" />
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + descrip
                <img src="https://www.meme-arsenal.com/memes/ead2165d061cb61ca19196df711c2071.jpg" />
            </div>
        </div>
    );
};

export default ProfileInfo;
