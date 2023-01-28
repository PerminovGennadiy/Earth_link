import React from "react";
import cl from './MyButton.module.css';

const MyButton = (props) => {
    return (
        <button
            onClick={props.onClick} className={cl.myButton}>
            {props.value}
        </button>
    )
}

export default MyButton;