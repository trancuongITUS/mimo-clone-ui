import React from "react";
import styles from "./index.module.css";

type Props = React.ComponentProps<"input"> & {
  label?: string;
};

const Input = (props: Props) => {
  const { className, label, ...rest } = props || {};
  return (
    <>
      {!!label && <p className={styles.title}>{label}</p>}
      <input
        className={styles.input + " " + (className ? className : "")}
        {...rest}
      />
    </>
  );
};

export default Input;
