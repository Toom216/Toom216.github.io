import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYGdPw_U3tYCNYdoncCjhKxlDhaNFjBGJvA&usqp=CAU",
                fullName: "Antonio",
                status: "i wanna pizza",
                location: { country: "Ukraine", city: "Zaporizhya" },
            },
            {
                id: 2,
                followed: false,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYGdPw_U3tYCNYdoncCjhKxlDhaNFjBGJvA&usqp=CAU",
                fullName: "Ervis",
                status: "my backbone is pain",
                location: { country: "USA", city: "New-York" },
            },
            {
                id: 3,
                followed: true,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYGdPw_U3tYCNYdoncCjhKxlDhaNFjBGJvA&usqp=CAU",
                fullName: "Lycan",
                status: "today is my birthsday",
                location: { country: "Germany", city: "Berlin" },
            },
        ]);
    }

    return (
        <div>
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.avatar} alt="1" src={u.photoUrl} />
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    onClick={() => {
                                        props.unfollow(u.id);
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        props.follow(u.id);
                                    }}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
