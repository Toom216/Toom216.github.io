import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {
            id: 1,
            message: "1st post",
            likesCount: "15",
        },
        {
            id: 2,
            message: "2nd post",
            likesCount: "20",
        },
    ];

    return (
        <div className={styles.postsBlock}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
            </div>
        </div>
    );
};

export default MyPosts;
