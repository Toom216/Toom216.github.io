import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.useRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={styles.postsBlock}>
            <h2>My Posts</h2>
            <AddNewPostForm onSubmit={onAddPost} />
            <div className={styles.posts}>{postsElements}</div>
        </div>
    );
};

function AddNewPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default MyPosts;
