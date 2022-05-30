import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.useRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={styles.postsBlock}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
