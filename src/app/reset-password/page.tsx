import Image from "next/image";
import Link from "next/link";

import "../../app/globals.css";
import styles from './index.module.css'
import resetPasswordImageSrc from './images/reset-password.webp'


export default function About() {
    return <div className={styles.page}>
        <div className={styles.content}>
            <div className={styles.header}>
                <a href="/">
                <svg height="100%" viewBox="0 0 70 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8"><path d="M24.3493 3.6048V0H28.5979V3.6048H24.3493ZM24.4854 18.7728V5.424H28.4861V18.7824H24.4854V18.7728Z" fill="currentColor"></path><path d="M32.0153 18.7776V5.424H35.8799V7.3488C36.1764 6.8496 36.5313 6.4272 36.9639 6.0768C37.3965 5.7264 37.8632 5.4624 38.3785 5.2752C38.8938 5.088 39.4382 4.9968 40.0264 4.9968C40.9208 4.9968 41.7035 5.2128 42.3597 5.64C43.0208 6.0672 43.5556 6.648 43.9785 7.3776C44.5618 6.5424 45.2327 5.9328 45.9958 5.5584C46.7493 5.184 47.6146 4.9968 48.5917 4.9968C49.4715 4.9968 50.2396 5.1648 50.9104 5.4912C51.5764 5.8176 52.1111 6.3552 52.5146 7.08C52.9181 7.8096 53.1174 8.736 53.1174 9.8544V18.7728H49.0875V10.656C49.0875 9.8208 48.9028 9.1968 48.5382 8.7984C48.1736 8.3952 47.6583 8.1984 47.0021 8.1984C46.2875 8.1984 45.7479 8.4 45.3688 8.7984C44.9896 9.1968 44.7563 9.6624 44.6688 10.176C44.5813 10.6896 44.5326 11.2704 44.5326 11.9136V18.7776H40.5854V10.656C40.5854 9.8208 40.4007 9.1968 40.0361 8.7984C39.6715 8.3952 39.1563 8.1984 38.5 8.1984C37.766 8.1984 37.2215 8.4 36.8521 8.7984C36.4875 9.2016 36.2542 9.6528 36.1667 10.1616C36.0792 10.6704 36.0306 11.2512 36.0306 11.9136V18.7776H32.0202H32.0153Z" fill="currentColor"></path><path d="M0 4.9968H8.50694V8.1936H12.5417V4.9968H17.0868V8.1936H21.1361V18.7824H17.0868V8.1888H12.5417V18.7776H8.50694V8.1888H3.99583V18.7776H0V4.9968Z" fill="currentColor"></path><path d="M62.7229 4.9872C58.7028 4.9872 55.4458 8.1696 55.4458 12.096C55.4458 16.0224 58.4549 19.2048 62.7229 19.2048C66.991 19.2048 70 16.0224 70 12.096C70 8.1696 66.7431 4.9872 62.7229 4.9872ZM62.7229 15.9312C60.7785 15.9312 59.1986 14.2128 59.1986 12.0912C59.1986 9.9696 60.7785 8.2512 62.7229 8.2512C64.6674 8.2512 66.2472 9.9696 66.2472 12.0912C66.2472 14.2128 64.6674 15.9312 62.7229 15.9312Z" fill="currentColor"></path></svg>
                </a>
            </div>
            <Image src={resetPasswordImageSrc} className={styles.image} alt="Image reset password" width={300} height={200} />
            <div className={styles.title}>Please enter your e-mail address</div>
            <input type="email" placeholder="E-mail" className={styles.input} />
            <button className={`${styles.button} ${styles.login}`}>Send password reset link</button>
            <div className={styles['other-login']}>

            </div>
            <div className={styles.link}>
                <Link style={{ color: "#8d60e2" }} href="/login" >Back to Login</Link>
            </div>
            <div className={styles.link}>
                If you're still having trouble, reach out at
                <a style={{ color: "#8d60e2" }} href="mailto:support@getmimo.com">support@getmimo.com</a>
                .
            </div>
        </div>
    </div>
}