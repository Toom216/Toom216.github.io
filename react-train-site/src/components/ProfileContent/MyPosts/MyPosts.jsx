import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, reqired } from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

function AddNewPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"Post message"} validate={[reqired, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={styles.postsBlock}>
            <h2>My Posts</h2>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={styles.posts}>{postsElements}</div>
        </div>
    );
});

export default MyPosts;
