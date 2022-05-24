import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src="https://oir.mobi/uploads/posts/2021-05/1621430508_15-oir_mobi-p-kaban-v-dikoi-prirode-zhivotnie-krasivo-fo-17.jpg" />
            {props.message}
            <div>
                Likes {props.likesCount}
            </div>
        </div>
    );
};

export default Post;
