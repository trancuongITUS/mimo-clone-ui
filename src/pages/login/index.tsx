import "../../app/globals.css";
import styles from './index.module.css'


export default function About() {
    return <div className={styles.page}>
        <div className={styles.content}>
            <div className={styles.header}>
                <svg height="100%" viewBox="0 0 70 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8"><path d="M24.3493 3.6048V0H28.5979V3.6048H24.3493ZM24.4854 18.7728V5.424H28.4861V18.7824H24.4854V18.7728Z" fill="currentColor"></path><path d="M32.0153 18.7776V5.424H35.8799V7.3488C36.1764 6.8496 36.5313 6.4272 36.9639 6.0768C37.3965 5.7264 37.8632 5.4624 38.3785 5.2752C38.8938 5.088 39.4382 4.9968 40.0264 4.9968C40.9208 4.9968 41.7035 5.2128 42.3597 5.64C43.0208 6.0672 43.5556 6.648 43.9785 7.3776C44.5618 6.5424 45.2327 5.9328 45.9958 5.5584C46.7493 5.184 47.6146 4.9968 48.5917 4.9968C49.4715 4.9968 50.2396 5.1648 50.9104 5.4912C51.5764 5.8176 52.1111 6.3552 52.5146 7.08C52.9181 7.8096 53.1174 8.736 53.1174 9.8544V18.7728H49.0875V10.656C49.0875 9.8208 48.9028 9.1968 48.5382 8.7984C48.1736 8.3952 47.6583 8.1984 47.0021 8.1984C46.2875 8.1984 45.7479 8.4 45.3688 8.7984C44.9896 9.1968 44.7563 9.6624 44.6688 10.176C44.5813 10.6896 44.5326 11.2704 44.5326 11.9136V18.7776H40.5854V10.656C40.5854 9.8208 40.4007 9.1968 40.0361 8.7984C39.6715 8.3952 39.1563 8.1984 38.5 8.1984C37.766 8.1984 37.2215 8.4 36.8521 8.7984C36.4875 9.2016 36.2542 9.6528 36.1667 10.1616C36.0792 10.6704 36.0306 11.2512 36.0306 11.9136V18.7776H32.0202H32.0153Z" fill="currentColor"></path><path d="M0 4.9968H8.50694V8.1936H12.5417V4.9968H17.0868V8.1936H21.1361V18.7824H17.0868V8.1888H12.5417V18.7776H8.50694V8.1888H3.99583V18.7776H0V4.9968Z" fill="currentColor"></path><path d="M62.7229 4.9872C58.7028 4.9872 55.4458 8.1696 55.4458 12.096C55.4458 16.0224 58.4549 19.2048 62.7229 19.2048C66.991 19.2048 70 16.0224 70 12.096C70 8.1696 66.7431 4.9872 62.7229 4.9872ZM62.7229 15.9312C60.7785 15.9312 59.1986 14.2128 59.1986 12.0912C59.1986 9.9696 60.7785 8.2512 62.7229 8.2512C64.6674 8.2512 66.2472 9.9696 66.2472 12.0912C66.2472 14.2128 64.6674 15.9312 62.7229 15.9312Z" fill="currentColor"></path></svg>
            </div>
            <div className={styles.title}>Welcome back!</div>
            <input type="email" placeholder="Your e-mail" className={styles.input} />
            <input type="password" placeholder="Your password" className={styles.input} />
            <button className={`${styles.button} ${styles.login}`}>Log in</button>
            <div className={styles['other-login']}>
                <div className={styles['btn-other']}>
                    <svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0"><path d="M22.0455 12.2366C22.0455 11.3733 21.9755 10.7433 21.8242 10.09H11.9824V13.9866H17.7593C17.6429 14.9549 17.0139 16.4133 15.6162 17.3932L15.5966 17.5237L18.7084 19.9384L18.924 19.9599C20.904 18.1282 22.0455 15.4332 22.0455 12.2366Z" fill="#4285F4"></path><path d="M11.9824 22.5034C14.8126 22.5034 17.1886 21.57 18.924 19.9601L15.6162 17.3933C14.7311 18.0117 13.543 18.4433 11.9824 18.4433C9.21036 18.4433 6.85766 16.6117 6.01898 14.0801L5.89605 14.0905L2.66036 16.5989L2.61804 16.7167C4.3418 20.1466 7.88253 22.5034 11.9824 22.5034Z" fill="#34A853"></path><path d="M6.01904 14.0801C5.79775 13.4268 5.66968 12.7267 5.66968 12.0034C5.66968 11.2801 5.79775 10.5801 6.0074 9.92678L6.00153 9.78764L2.72529 7.23901L2.6181 7.29009C1.90765 8.71343 1.5 10.3118 1.5 12.0034C1.5 13.6951 1.90765 15.2934 2.6181 16.7167L6.01904 14.0801Z" fill="#FBBC05"></path><path d="M11.9824 5.56337C13.9507 5.56337 15.2784 6.41503 16.0355 7.12674L18.9939 4.2334C17.177 2.54175 14.8126 1.50342 11.9824 1.50342C7.88253 1.50342 4.3418 3.86005 2.61804 7.29001L6.00734 9.9267C6.85766 7.39505 9.21036 5.56337 11.9824 5.56337Z" fill="#EB4335"></path></svg>
                    <p>Google</p>
                </div>
                <div className={styles['btn-other']}>
                    <svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 text-black"><path d="M19.4933 17.5895C19.1908 18.2883 18.8328 18.9314 18.418 19.5228C17.8526 20.3289 17.3896 20.8869 17.0329 21.1968C16.4798 21.7054 15.8872 21.9659 15.2527 21.9807C14.7971 21.9807 14.2478 21.8511 13.6083 21.5882C12.9667 21.3264 12.3771 21.1968 11.838 21.1968C11.2726 21.1968 10.6662 21.3264 10.0175 21.5882C9.36793 21.8511 8.84462 21.9881 8.44451 22.0017C7.83601 22.0276 7.22949 21.7598 6.62407 21.1968C6.23767 20.8598 5.75435 20.282 5.17536 19.4635C4.55415 18.5895 4.04342 17.5759 3.64331 16.4204C3.21481 15.1723 3 13.9637 3 12.7936C3 11.4533 3.28962 10.2973 3.86972 9.32852C4.32563 8.55039 4.93216 7.93658 5.69127 7.48598C6.45038 7.03537 7.2706 6.80575 8.1539 6.79106C8.63722 6.79106 9.27102 6.94056 10.0587 7.23438C10.8441 7.52918 11.3484 7.67869 11.5695 7.67869C11.7348 7.67869 12.295 7.50388 13.2447 7.15537C14.1428 6.83217 14.9008 6.69834 15.5218 6.75106C17.2045 6.88686 18.4686 7.55017 19.3093 8.7452C17.8044 9.65702 17.06 10.9341 17.0748 12.5725C17.0884 13.8486 17.5514 14.9106 18.4612 15.7538C18.8735 16.1451 19.334 16.4476 19.8463 16.6624C19.7352 16.9846 19.618 17.2932 19.4933 17.5895V17.5895ZM15.6341 2.40353C15.6341 3.40376 15.2687 4.33767 14.5404 5.20209C13.6614 6.22972 12.5982 6.82353 11.4453 6.72983C11.4306 6.60983 11.4221 6.48354 11.4221 6.35082C11.4221 5.39061 11.8401 4.36298 12.5824 3.52276C12.953 3.09734 13.4243 2.74361 13.9959 2.46143C14.5663 2.18346 15.1058 2.02974 15.6132 2.00342C15.628 2.13713 15.6341 2.27086 15.6341 2.40352V2.40353Z" fill="currentColor"></path></svg>
                    <p>Apple</p>
                </div>
                <div className={styles['btn-other']}>
                    <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 1.50342C6.7019 1.50342 2 6.20532 2 12.0034C2 17.308 5.93645 21.6813 11.0447 22.3911V14.9676H8.58245V12.1147H11.0447V10.0116C11.0447 7.57032 12.5346 6.24102 14.7123 6.24102C15.7571 6.24102 16.6527 6.31872 16.9131 6.35232V8.90382L15.4032 8.90487C14.2189 8.90487 13.991 9.46767 13.991 10.293V12.1137H16.8155L16.4459 14.9665H13.9899V22.3858C19.0814 21.6603 23 17.2954 23 12.0034C23 6.20532 18.2981 1.50342 12.5 1.50342Z" fill="#4267B2"></path></svg>
                    <p>Facebook</p>
                </div>
            </div>
            <div className={styles.link}>
                <div>Don't have an account?</div> <a href="/register">Create an account</a>
            </div>
            <div className={styles.link}>
                <a href="/reset-password">Reset your password</a>
            </div>
        </div>
    </div>
}