import MimoLogo from "@/components/mimo-logo";
import { GoogleSignUpButton } from "@/components/register/buttons";
import Link from "next/link";
import styles from "./styles.module.css";

export default function About() {
	return (
		<div className={styles.page}>
			<div className={styles.content}>
				<div className={styles.header}>
					<MimoLogo />
				</div>
				<div className={styles.title}>Start learning to code today!</div>
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
				<label className={styles.term}>
					<input type="checkbox" name="term" />
					<div>I agree to Mimo&apos;s</div>
					<a href="https://mimo.org/terms">Terms of Service</a>
					<div>and</div>
					<a href="https://mimo.org/terms#privacy-policy">Privacy Policy</a>
				</label>
				<button className={`${styles.button} ${styles.login}`}>
					Sign up and learn for free
				</button>
				<div className={styles["other-login"]}>
					<GoogleSignUpButton />
				</div>
				<div className={styles.link}>
					<div>You already have an account?</div>{" "}
					<Link href="/login">Log in</Link>
				</div>
			</div>
		</div>
	);
}
