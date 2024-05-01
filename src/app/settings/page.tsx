"use client";
import "../../app/globals.css";

import { Space, Switch } from "antd";
import { updateProfile, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ProtectedRouter from "@/components/ProtectedRouter";

import { handleLogout } from "../lib/auth";
import { useCurrentUser, useProtectedRoute } from "../lib/hooks";
import { fetchUserInfo, updateUserInfo } from "../lib/userInfo";
import styles from "./index.module.css";
import { UserInfo } from "@/utils/types/user";

const Settings = () => {
  useProtectedRoute();
  const user = useCurrentUser();
  const router = useRouter();

  const [userName, setUserName] = useState<string | null | undefined>(
    user?.displayName
  );
  const [description, setDescription] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchDescription = async () => {
      if (user) {
        const data = await fetchUserInfo(user.uid);
        setUserInfo(data);
        setDescription(data.description);
      }
    };
    if (description === null) fetchDescription();
  }, [user]);

  useEffect(() => {
    if (!userName && user) setUserName(user.displayName);
  }, [user]);

  const handleUpdateData = async () => {
    try {
      if (!userInfo) return;
      updateProfile(user as User, { displayName: userName });
      updateUserInfo(user?.uid as string, {
        ...userInfo,
        description: description || "",
      });
      toast.success("Update user data successfully !!");
    } catch (err) {
      console.error("🚀 ~ handleUpdateData ~ err:", err);
    }
  };

  return (
    <ProtectedRouter>
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.section}>
            <p className={styles.title}>Your name</p>
            <input
              type="text"
              className={styles.input}
              style={{ marginTop: 12 }}
              value={userName || ""}
              onChange={(e) => {
                setUserName(e.currentTarget.value);
              }}
            />
          </div>

          <div className={styles.section}>
            <p className={styles.title}>About you</p>
            <textarea
              className={styles.input}
              placeholder="Say something about you"
              rows={6}
              style={{ marginTop: 16 }}
              value={description || ""}
              onChange={(e) => {
                setDescription(e.currentTarget.value);
              }}
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
        <Space className={styles.buttons}>
          <button
            className={`${styles.button} ${styles.login}`}
            onClick={handleUpdateData}
            disabled={!userInfo}
          >
            Save
          </button>
          <button
            className={`${styles.button} ${styles.logout}`}
            onClick={async () => {
              await handleLogout();
              router.push("/login");
            }}
          >
            Log out
          </button>
        </Space>
      </div>
    </ProtectedRouter>
  );
};

export default Settings;
