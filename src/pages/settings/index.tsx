import React from "react";
import styles from "./index.module.css";
import "../../app/globals.css";
import { Switch } from "antd";

const Settings = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.section}>
          <p className={styles.title}>Your name</p>
          <input
            type="text"
            className={styles.input}
            style={{ marginTop: 12 }}
          />
        </div>

        <div className={styles.section}>
          <p className={styles.title}>About you</p>
          <textarea
            className={styles.input}
            placeholder="Say something about you"
            rows={6}
            style={{ marginTop: 16 }}
          />
        </div>

        <div className={styles.section}>
          <p className={styles.title}>Sound</p>
          <div className={styles.field}>
            <p className={styles.label}>Sound effects</p>
            <Switch defaultChecked />
          </div>
        </div>

        <div className={styles.section}>
          <p className={styles.title}>Subscription details</p>
          <div className={styles.field}>
            <p className={styles.label}>Subscription type</p>
            <p>Mimo Basic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
