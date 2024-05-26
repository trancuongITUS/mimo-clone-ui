"use client";

import { handleGoogleLogin } from "@/utils/lib/auth";
import styles from "@/app/register/index.module.css";
import { useRouter } from "next/navigation";

export function GoogleSignUpButton() {
  const router = useRouter();
  return (
    <div
      className={styles["btn-other"]}
      onClick={async () => {
        await handleGoogleLogin();
        router.push("/suggest-courses");
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 flex-shrink-0"
      >
        <path
          d="M22.0455 12.2366C22.0455 11.3733 21.9755 10.7433 21.8242 10.09H11.9824V13.9866H17.7593C17.6429 14.9549 17.0139 16.4133 15.6162 17.3932L15.5966 17.5237L18.7084 19.9384L18.924 19.9599C20.904 18.1282 22.0455 15.4332 22.0455 12.2366Z"
          fill="#4285F4"
        ></path>
        <path
          d="M11.9824 22.5034C14.8126 22.5034 17.1886 21.57 18.924 19.9601L15.6162 17.3933C14.7311 18.0117 13.543 18.4433 11.9824 18.4433C9.21036 18.4433 6.85766 16.6117 6.01898 14.0801L5.89605 14.0905L2.66036 16.5989L2.61804 16.7167C4.3418 20.1466 7.88253 22.5034 11.9824 22.5034Z"
          fill="#34A853"
        ></path>
        <path
          d="M6.01904 14.0801C5.79775 13.4268 5.66968 12.7267 5.66968 12.0034C5.66968 11.2801 5.79775 10.5801 6.0074 9.92678L6.00153 9.78764L2.72529 7.23901L2.6181 7.29009C1.90765 8.71343 1.5 10.3118 1.5 12.0034C1.5 13.6951 1.90765 15.2934 2.6181 16.7167L6.01904 14.0801Z"
          fill="#FBBC05"
        ></path>
        <path
          d="M11.9824 5.56337C13.9507 5.56337 15.2784 6.41503 16.0355 7.12674L18.9939 4.2334C17.177 2.54175 14.8126 1.50342 11.9824 1.50342C7.88253 1.50342 4.3418 3.86005 2.61804 7.29001L6.00734 9.9267C6.85766 7.39505 9.21036 5.56337 11.9824 5.56337Z"
          fill="#EB4335"
        ></path>
      </svg>
      <p>Sign in with Google</p>
    </div>
  );
}
