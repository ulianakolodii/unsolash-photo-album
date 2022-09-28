import React from "react";
import classes from "./styles.module.css";

const Modal = ({ children }) => {
    return (
        <div className={classes.overlay}>
            <div className={classes.container}>
                {children}
            </div>
        </div>
    );
  };
  
  export default Modal;