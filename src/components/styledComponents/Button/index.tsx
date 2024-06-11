import React from "react";
import styles from "./index.module.css";

const Button = (props?: React.ComponentProps<"button">) => {
  const { className, ...rest } = props || {};
  return (
    <button
      className={styles.button + " " + (className ? className : "")}
      {...rest}
    ></button>
  );
};

export default Button;
