import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

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
            <div className={styles.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
