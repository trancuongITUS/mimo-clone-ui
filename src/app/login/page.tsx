import {
	AppleLoginButton,
	FacebookLoginButton,
	GoogleLoginButton,
} from "@/components/login/buttons";
import MimoLogo from "@/components/mimo-logo";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Page() {
	return (
		<div className={styles.page}>
			<div className={styles.content}>
				<div className={styles.header}>
					<MimoLogo />
				</div>
				<div className={styles.title}>Welcome back!</div>
				<input
					type="email"
					placeholder="Your e-mail"
					className={styles.input}
				/>
				<input
					type="password"
					placeholder="Your password"
					className={styles.input}
				/>
				<button className={`${styles.button} ${styles.login}`}>Log in</button>
				<div className={styles["other-login"]}>
					<GoogleLoginButton />
					<AppleLoginButton />
					<FacebookLoginButton />
				</div>
				<div className={styles.link}>
					<div>Don&apos;t have an account?</div>
					<Link href="/register">Create an account</Link>
				</div>
				<div className={styles.link}>
					<Link href="/reset-password">Reset your password</Link>
				</div>
			</div>
		</div>
	);
}
