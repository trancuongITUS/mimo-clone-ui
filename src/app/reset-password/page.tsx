import MimoLogo from "@/components/mimo-logo";
import Image from "next/image";
import Link from "next/link";
import resetPasswordImageSrc from "./images/reset-password.webp";
import styles from "./styles.module.css";

export default function About() {
	return (
		<div className={styles.page}>
			<div className={styles.content}>
				<div className={styles.header}>
					<MimoLogo />
				</div>
				<Image
					src={resetPasswordImageSrc}
					className={styles.image}
					alt="Image reset password"
					width={300}
					height={200}
				/>
				<div className={styles.title}>Please enter your e-mail address</div>
				<input type="email" placeholder="E-mail" className={styles.input} />
				<button className={`${styles.button} ${styles.login}`}>
					Send password reset link
				</button>
				<div className={styles["other-login"]}></div>
				<div className={styles.link}>
					<Link style={{ color: "#8d60e2" }} href="/login">
						Back to Login
					</Link>
				</div>
				<div className={styles.link}>
					If you&apos;re still having trouble, reach out at
					<Link style={{ color: "#8d60e2" }} href="mailto:support@getmimo.com">
						support@getmimo.com
					</Link>
					.
				</div>
			</div>
		</div>
	);
}
