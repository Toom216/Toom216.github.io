import profileReducer, { addPostActionCreator } from "./profile-reducer";

let state = {
    posts: [
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
    ],
};

test("count of posts should be 5", () => {
    let action = addPostActionCreator("1235");

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});

test("message of new post should be correct", () => {
    let action = addPostActionCreator("1235");

    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe("1235");
});
