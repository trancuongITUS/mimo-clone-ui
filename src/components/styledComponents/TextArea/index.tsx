import React from "react";
import styles from "./index.module.css";

type Props = React.ComponentProps<"textarea"> & {
  label?: string;
};

const Textarea = (props: Props) => {
  const { className, label, ...rest } = props || {};

  return (
    <>
      {!!label && <p className={styles.title}>{label}</p>}
      <textarea
        className={styles.input + " " + (className ? className : "")}
        rows={3}
        {...rest}
      />
    </>
  );
};

export default Textarea;
