import styles from "./ProfileContent.module.css";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";

const ProfileContent = () => {
    return (
        <div className={styles.content}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Wildschwein%2C_N%C3%A4he_Pulverstampftor_%28cropped%29.jpg/800px-Wildschwein%2C_N%C3%A4he_Pulverstampftor_%28cropped%29.jpg" />
            </div>
            <div>
                ava + descrip
                <img src="https://www.meme-arsenal.com/memes/ead2165d061cb61ca19196df711c2071.jpg" />
            </div>
            <MyPosts/>
        </div>
    );
};

export default ProfileContent;
