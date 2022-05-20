import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message="1st post" likeText="Like" likeCount="15" />
            <Post message="2nd post" likeText="Like" likeCount="20" />
        </div>
    );
};

export default MyPosts;
