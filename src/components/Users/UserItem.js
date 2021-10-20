import React from "react";
import styles from "./UserItem.module.css"

const UserItem = props => {
    return <li className={styles.user} key={props.key}> 
        <label>{props.name} ({props.age} years old)</label>
    </li>
}

export default UserItem