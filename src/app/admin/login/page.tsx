"use client";
import "../../../app/globals.css";
import styles from "./index.module.css";
import LogoAppAdminPage from "@/components/LogoAppAdminPage";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "@/utils/firebase/config";
import { fetchUserInfo } from "@/utils/lib/userInfo";
import { UserRole } from "@/utils/types";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        fetchUserInfo(user.uid).then((user) => {
          if (user?.role !== UserRole.ADMIN) {
            toast.error("You are not an admin");
          }
          router.push("/admin/courses");
        });
      })
      .catch((error) => {
        console.log("~ handleLogin ~ error:", error);
        toast.error("Email or password invalid");
      });
  };
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.header}>
          <LogoAppAdminPage></LogoAppAdminPage>
        </div>
        <div className={styles.title}>Welcome back</div>
        <input
          type="email"
          placeholder="Your e-mail"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          type="password"
          placeholder="Your password"
          className={styles.input}
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={password}
        />
        <button
          className={`${styles.button} ${styles.login}`}
          onClick={handleLogin}
        >
          Log in
        </button>
      </div>
    </div>
  );
}
